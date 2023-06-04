import React from 'react'
import { LargeText,SmallText,SmallerText } from '@/components/texts'
import {motion} from "framer-motion"
import Button from '@/components/Button'
import Link from 'next/link'
type Props = {}



const Hero = (props: Props) => {
  return (
    <div
    className='flex w-[70%] mx-auto h-auto py-auto '
    >
    <motion.div
    className=' ma'
    initial={{
      x:-200,
      opacity:0,
    }}
    animate={{
      opacity:1,
      x: 0,
      transition:{
        duration:0.3,
        type:"spring",
        stiffness:300,
        staggerChildren: 0.2,
      }
    }}
    >
        <SmallText className=' mb-5' text='hi my name is'></SmallText>
        <LargeText className='mb-3 text-7xl' text='Harisudarsan'></LargeText>
        <LargeText className='mb-7 text-7xl' text='I build things for web'></LargeText>
      <SmallerText className='mb-9' text="I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at "></SmallerText>
     <Link href="/#contact"> <Button text='Contact me'></Button></Link>
     
      </motion.div>
      </div>
  )
}

export default Hero

{/* <SmallText className=' mb-5' text='hi my name is'></SmallText>
        <LargeText className='mb-3' text='Harisudarsan'></LargeText>
        <LargeText className='mb-7' text='I build things for web'></LargeText>
      <SmallerText className='mb-9' text="I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at "></SmallerText>
     <Link href="/#contact"> <Button text='Contact me'></Button></Link> */}