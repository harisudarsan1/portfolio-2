import React from 'react'
import { SmallerText,LargeText } from './texts'
import { motion } from 'framer-motion'

type Props = {
    title:string,
    num:string,
}

const Title = (props: Props) => {
  return (
    <span className='flex gap-4 items-center mb-10' >
        <SmallerText className=' text-3xl' text={props.num}></SmallerText>
        <LargeText className=' text-4xl' text={props.title}></LargeText> 
        <motion.div className=' h-[1px] basis-1/2 bg-black-900 ' ></motion.div> </span>  
  )
}

export default Title