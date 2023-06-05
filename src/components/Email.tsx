import React from 'react'
import { SmallerText } from './texts'

type Props = {}

const Email = (props: Props) => {
  return (
    <div className='md:flex gap-6  hidden  md:flex-col md:fixed z-20 right-10 bottom-0 top-[50%]'>
<p className={`emailText mx-auto`}>g.harisudarsan.met21@itbhu.ac.in</p>

<div className=' mx-auto h-full w-[2px] bg-black-900'></div>
    
</div>
  )
}

export default Email