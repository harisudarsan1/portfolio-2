Since function defined by us are in Userspace so we need to register `uprobe` instead of `kprobe`. First we will write a simple function which is used for sending `http` get response requested at `/e`. 

```go
/*
 * Copyright 2018- The Pixie Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

package main

import (
	"fmt"
	"net/http"
	"strconv"
)

// computeE computes the approximation of e by running a fixed number of iterations.
//go:noinline
func computeE(iterations int64) float64 {
	res := 2.0
	fact := 1.0

	for i := int64(2); i < iterations; i++ {
		fact *= float64(i)
		res += 1 / fact
	}
	return res
}

func main() {
	addr := ":9090"
	http.HandleFunc("/e", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodGet {
			w.WriteHeader(http.StatusMethodNotAllowed)
			return
		}
		iters := int64(100)
		keys, ok := r.URL.Query()["iters"]
		if ok && len(keys[0]) >= 1 {
			val, err := strconv.ParseInt(keys[0], 10, 64)
			if err != nil || val <= 0 {
				w.WriteHeader(http.StatusBadRequest)
				return
			}
			iters = val
		}

		w.Write([]byte(fmt.Sprintf("e = %0.4f\n", computeE(iters))))
	})

	fmt.Printf("Starting server on: %+v\n", addr)
	err := http.ListenAndServe(addr, nil)
	if err != nil && err != http.ErrServerClosed {
		fmt.Printf("Failed to run http server: %v\n", err)
	}
}
```
We are goin to trace the arguments of the function ComputeE. 

#### How uprobes work
The uprobes functions are code snippets that can be run inside the kernel for acessing userspace programs mostly used for debugging and monitoring the app. 
The diagram below shows how the binary is modified by the Linux kernel with an uprobe. The soft-interrupt instruction (`int3`) is inserted as the first instruction in `main.computeE`. This causes a soft-interrupt, allowing the Linux kernel to execute our BPF function. We then write the arguments to the perf-buffer, which is asynchronously read by the tracer.


![](https://blog.px.dev/static/87301c7282e8f8270fee2afb9fe85c81/app-trace.svg)


### High level view of tracing 

![[Pasted image 20231027171929.png]]

The logic is after the soft interrupt the bpf code is triggered by the uprobe hook which executes the bpf program after the bpf program writes the data to the `perf buffer` which is a mapping used for transferring data between userSpace and kernel space.

### Implementation of the tracer function
The tracer binary will be the userspace program which is responsible for registering the bpf code and reading the results from the bpf code.

```go
/*
 * Copyright 2018- The Pixie Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

package main

import (
	"encoding/binary"
	"flag"
	"fmt"
	"github.com/iovisor/gobpf/bcc"
	"os"
	"os/signal"
)

const bpfProgram = `
#include <uapi/linux/ptrace.h> // This line includes necssary //header files for the eBPF programs.

BPF_PERF_OUTPUT(trace);

// This function will be registered to be called everytime
// main.computeE is called.
inline int computeECalled(struct pt_regs *ctx) {
  // The input argument is stored in ax.
  long val = ctx->ax;
  trace.perf_submit(ctx, &val, sizeof(val));
  return 0;
}
`




var binaryProg string
func init() {
	flag.StringVar(&binaryProg, "binary", "", "The binary to probe")
}

func main() {
	flag.Parse()
	if len(binaryProg) == 0 {
		panic("Argument --binary needs to be specified")
	}

	bccMod := bcc.NewModule(bpfProgram, []string{})
	uprobeFD, err := bccMod.LoadUprobe("computeECalled")
	if err != nil {
		panic(err)
	}

	// Attach the uprobe to be called everytime main.computeE is called.
	// We need to specify the path to the binary so it can be patched.
	err = bccMod.AttachUprobe(binaryProg, "main.computeE", uprobeFD, -1)
	if err != nil {
		panic(err)
	}

	// Create the output table named "trace" that the BPF program writes to.
	table := bcc.NewTable(bccMod.TableId("trace"), bccMod)
	ch := make(chan []byte)

	pm, err := bcc.InitPerfMap(table, ch, nil)
	if err != nil {
		panic(err)
	}

	// Watch Ctrl-C so we can quit this program.
	intCh := make(chan os.Signal, 1)
	signal.Notify(intCh, os.Interrupt)

	pm.Start()
	defer pm.Stop()

	for {
		select {
		case <-intCh:
			fmt.Println("Terminating")
			os.Exit(0)
		case v := <-ch:
			// This is a bit of hack, but we know that iterations is a
			// 8 bytes int64 value.
			d := binary.LittleEndian.Uint64(v)
			fmt.Printf("Value = %v\n", d)
		}
	}
}
```

Explanation:
	The BPF program basically  extracts values stores in the `ax` register using this struct `struct pt_regs` .  `trace.perf_submit(ctx, &val, sizeof(val))` this line will submit the perf event using the trace object.
	In the `init()` we are asking for a binary as our paramet in this case our server's binary should be given. Using `gobpf/bcc` package we are attaching loading the `uprobe` by specifying the function name "computeEcalled". 
	
The `uprobe` is attached to the specified binary given as aragument while initializing the trace binary. After that it creates an output table named trace .
A perf map is created to collect and transmit data from the eBPF program to user space. The "trace" output from the eBPF program is associated with this perf map.

- **Signal Handling**: The code sets up signal handling to watch for an interrupt signal (Ctrl-C) and clean up resources properly when the program is terminated.
    
- **Start Data Collection**: The program starts the perf map, which begins collecting data from the eBPF program.
    
- **Data Processing Loop**: The main loop continuously checks for signals and data from the perf map. When data is received, it processes and prints the value collected from the `ax` register during the execution of the `main.computeE` function in the traced binary.
    
- **Termination**: The program can be terminated gracefully by sending a Ctrl-C signal. When this happens, the code prints a termination message and exits.
	