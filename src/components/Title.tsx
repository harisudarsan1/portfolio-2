import React from 'react'
import { SmallerText,LargeText } from './texts'


type Props = {
    title:string,
    num:string,
}

const Title = (props: Props) => {
  return (
    <span className='flex gap-4 items-center mb-10' >
        <SmallerText className=' text-3xl' text={props.num}></SmallerText>
        <LargeText className=' text-4xl' text={props.title}></LargeText> 
        <div className=' h-[1px] basis-1/2 bg-black-900 ' ></div> </span>  
  )
}

export default Title