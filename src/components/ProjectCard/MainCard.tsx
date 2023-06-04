import React from 'react'
import { LargeText,SmallerText,SmallText } from '../texts'
import {motion} from "framer-motion"
import Image from 'next/image'
import { classNames } from '@/utils'
import Link from 'next/link'

type Props = {
   title: string,
   details: string,
   technologies: string[] ,
   leftSide: boolean,
   image:string,
   github:string,
   liveURL:string,
}

const MainCard = ({title,details,technologies,leftSide,image,github,liveURL}: Props) => {
  return (
    <motion.div>
        <div className={classNames(
            leftSide?"flex-row-reverse":"flex-row","flex relative"
        )}>
            <Image 
            height={500}
            width={500}
            
            className=' -z-10 opacity-20 md:opacity-80 hover:opacity-100  ' 
            alt='projectImage' 
            src={"/projects/"+image}>

            </Image>
        
        
        <div className={classNames(
            leftSide ? "text-left justify-start" : "text-right justify-end","flex flex-col gap-5 z-10 "

        )}>
            <SmallText text='featured project'></SmallText>
            <LargeText text={title}></LargeText>

            <div className={classNames(
                "bg-bg1 px-6 py-4 flex min-w-[70%] overflow-visible ",leftSide?" justify-start ":" justify-end",
            )}>
                <SmallerText text={details}></SmallerText>
            </div>


            <div className={classNames(
                leftSide?"justify-start":"justify-end","flex gap-3"
            )}>
            
            {
                technologies.map((item)=><SmallText className=' text-sm' text={item}></SmallText>)
            }
            </div>
            <div className={classNames(
                leftSide?"justify-start":"justify-end","flex gap-3"
            )}>
               <Link href={github}><span>github</span></Link> 
               <Link href={liveURL}><span>link</span></Link> 
            </div>


        </div>
        
        
        
        </div>
    </motion.div>
  )
}

export default MainCard