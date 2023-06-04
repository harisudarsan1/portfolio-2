"use client";
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState ,useEffect} from 'react';
import Sidebar from './Sidebar';
import Button from '../Button';

function Path(props:Object) {
  return (
      <motion.path
          fill="transparent"
          strokeWidth="2"
          stroke="black"
          strokeLinecap="round"
          {...props}
      ></motion.path>
  );
}


type Props = {}

function Navbar({}: Props) {
  const [isOpen,setMenu] = useState(true);
  
    return (
    <motion.nav
initial={{
    opacity:0,
  y:-70,

}}
whileInView={{
  opacity:1,
    y:0
}}
transition={{
    duration: 0.5,
    timeConstant:'ease in'
}}
    className=' font-semibold flex justify-between mx-10 z-50 py-6'>
       <div> <Link className=' text-3xl' href="/">Harisudarsan</Link></div>
       
       <div className=' hidden  md:flex justify-center items-center gap-3'>
       <Link className='' href="/about">about</Link>
       <Link className='' href="/experience">Experience</Link>
       <Link className='' href="/work">Work</Link>
       <Link className='' href="/contact">contact</Link>
       <Button
       className='text-lg px-4 py-1'
       text='resume'
       ></Button>


       </div>
  <div className='flex md:hidden z-30 cursor-pointer transition p-4 bg-bg1 rounded-full'
       onClick={()=>setMenu(!isOpen)}
       >
       {/* {
        menu ? <svg onClick={()=>setMenu(false)} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg> :
          <svg onClick={()=>setMenu(true)} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>
       } */}

        <svg width="23" height="23" viewBox="0 0 23 23">
                            <Path
                                variants={{
                                    closed: { d: 'M 2 2.5 L 20 2.5' },
                                    open: { d: 'M 3 16.5 L 17 2.5' },
                                }}
                                animate={isOpen ? 'open' : 'closed'}
                            />
                            <Path
                                d="M 2 9.423 L 20 9.423"
                                variants={{
                                    closed: { opacity: 1 },
                                    open: { opacity: 0 },
                                }}
                                animate={isOpen ? 'open' : 'closed'}
                                transition={{ duration: 0.1 }}
                            />
                            <Path
                                variants={{
                                    closed: { d: 'M 2 16.346 L 20 16.346' },
                                    open: { d: 'M 3 2.5 L 17 16.346' },
                                }}
                                animate={isOpen ? 'open' : 'closed'}
                            />
                        </svg>
       
       </div>

{
  isOpen && <motion.div 
  initial={false}
  animate={isOpen ? "open" : "closed"}
  className=' md:hidden z-10 right-12 top-10  absolute'
  >
<Sidebar isOpen={isOpen} ></Sidebar>
  </motion.div>
}





    </motion.nav>
  )
}

export default Navbar