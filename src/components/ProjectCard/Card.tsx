import React from 'react'
import External from '../icons/External'
import Github from '../icons/Github'
import { SmallText, SmallerText,LargeText } from '../texts'
import { Otherprojects } from '@/utils/types'
import Link from 'next/link'


const Card = (props: Otherprojects) => {
  return (
    <div className=' p-3  bg-bg2'>
      <div className='flex py-3 justify-between'>
        <Link href={props.github ?? '/'}><Github></Github></Link>
        <Link href={props.cta ?? '/'}><External ></External></Link>
      </div>
      <SmallText className=' py-5' text={props.title}></SmallText>
      <SmallerText text={props.details}></SmallerText>
      <div className=' py-3 flex justify-start gap-3'>
        {
          props.technologies.map((item) => <SmallerText text={item}></SmallerText>)
        }
      </div>
    </div>
  )
}

export default Card