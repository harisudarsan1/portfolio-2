"use client";
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState ,useEffect} from 'react';
import SideBar from './SideBar';

type Props = {}

function Navbar({}: Props) {
  const [menu,setMenu] = useState(true);
  
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
    className=' font-semibold flex justify-between mx-10 py-6'>
       <div> <Link className=' text-3xl' href="/">Harisudarsan</Link></div>
       
       <div className=' hidden  md:flex justify-center items-center gap-3'>
       <Link className='' href="/about">about</Link>
       <Link className='' href="/experience">Experience</Link>
       <Link className='' href="/work">Work</Link>
       <Link className='' href="/contact">contact</Link>
       <button className=' py-1 px-3 bg-bg3 border-black-900 border-solid border-[1px]'>
        Resume
       </button>

       </div>
       <div className='flex md:hidden cursor-pointer transition  '>
       {/* {
        menu ? <svg onClick={()=>setMenu(false)} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg> :
          <svg onClick={()=>setMenu(true)} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>
       } */}
       <SideBar></SideBar>
       
       </div>

    </motion.nav>
  )
}

export default Navbar