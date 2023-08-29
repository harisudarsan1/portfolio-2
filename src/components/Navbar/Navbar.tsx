"use client";
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Button from '../Button';

function Path(props: Object) {
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

function Navbar({ }: Props) {
  const [isOpen, setMenu] = useState(true);

  return (
    <nav
      className=' font-semibold flex justify-between mx-10 z-50 py-6'>
      <div> <Link className=' text-3xl' href="/">Harisudarsan</Link></div>

      <div className=' hidden  md:flex justify-center items-center gap-3'>
        <Link className='' href="/#about">about</Link>
        <Link className='' href="/#experience">Experience</Link>
        <Link className='' href="/#work">Work</Link>
        <Link className='' href="/#contact">contact</Link>
        <Button
          className='text-lg px-4 py-1'
          text='resume'
        ></Button>


      </div>
      <div className='flex md:hidden z-30 cursor-pointer transition p-4 bg-bg1 rounded-full'
        onClick={() => setMenu(!isOpen)}
      >
        {
          isOpen ? <svg onClick={() => setMenu(false)} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" /></svg> :
            <svg onClick={() => setMenu(true)} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" /></svg>
        }



      </div>







    </nav>
  )
}

export default Navbar
