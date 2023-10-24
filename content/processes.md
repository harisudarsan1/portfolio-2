**Process** : A process is an abstract entity defined by the kernel to which system resources are allocated  in order to execute a program.

* Point:- 
From the kernel’s point of view, a process consists of user-space memory containing program code and variables used by that code, and a range of kernel data structures that maintain information about the state of the process. The information recorded in the kernel data structures includes various identifier numbers IDs) associated with the process, virtual memory tables, the table of open file descriptors, information relating to signal delivery and handling, process resource usages and limits, the current working directory, and a host of other information.

#### PID
Process Id is returned by various syscalls like `getpid()` with the return type `pid_t`.

### Virtual Memory Management
The aim of this technique is to use both of the CPU and Ram to its maximum efficiency by exploiting  property called `locality of reference`. 

#### 2 kinds of locality
- Spatial locality is the tendency of a program to reference memory addresses that are near those that were recently accessed (because of sequential processing of instructions, and, sometimes, sequential processing of data structures).
- Temporal locality is the tendency of a program to access the same memory
addresses in the near future that it accessed in the recent past (because of
loops).


![[memory layout.png]]

arguments and environmental lists are stored in argv, environ label.

A virtual memory scheme splits the memory used by each program into small,
fixed-size units called pages. Correspondingly, RAM is divided into a series of page frames of the same size. At any one time, only some of the pages of a program need to be resident in physical memory page frames; these pages form the so-called resident set. Copies of the unused pages of a program are maintained in the swap area—a reserved area of disk space used to supplement the computer’s RAM—and loaded into physical memory only as required. When a process references a page that is not currently resident in physical memory, a page fault occurs, at which point the kernel suspends execution of the process while the page is loaded from disk into memory.

When there is no corresponding page table for a process tries to access an address it receives a `SIGSEGV` signal. 
This can occur under following circumstances.
- as the stack grows downward beyond limits previously reached;
- when memory is allocated or deallocated on the heap, by raising the program
break using brk(), sbrk(), or the malloc family of functions (Chapter 7);
- when System V shared memory regions are attached using shmat() and
detached using shmdt() (Chapter 48); and
-  when memory mappings are created using mmap() and unmapped using
munmap()


### Environment List 
When a new process is created it inherits the value of its environment and later it might modify its environment. This is also only form of inter- process communication. 

Within C program the environment list can be accessed from `char **environ` Like argv, environ points to a NULL-terminated list of pointers to null-terminated strings.

  
### Modifying the environment
Sometimes, it is useful for a process to modify its environment. One reason is to make a change that is visible in all child processes subsequently created by that pro-cess. Another possibility is that we want to set a variable that is visible to a new program to be loaded into the memory of this process (“execed”). In this sense, the environment is not just a form of inter-process communication, but also a method of inter-program communication. (This point will become clearer in Chapter 27, where we explain how the exec() functions permit a program to replace itself by a
new program within the same process.)

**Functions for accessing env variables**
- getenv(char *string) returns the string with the provided env name
- settenv(char *name, char *value, int overwrite ) returns 0 on sucess -1 on error.
- 
