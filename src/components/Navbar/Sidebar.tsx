import React from 'react'
import {motion} from "framer-motion"
type Props = {
    isOpen:boolean
}


const sidebar = {
    open: (height = 500) => ({
      clipPath: `circle(${height * 2 + 200}px at 100px -40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
        
      }
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };


const Sidebar = ({isOpen}: Props) => {
  return (
    <motion.div
  
    animate={isOpen ? "open" : "closed"}
    variants={sidebar}
    className=' bg-bg1 h-max py-5 px-9 flex justify-center  w-max rounded-md '
    >
        <ul className=' text-xl text-black-900'>
            <li>home</li>
            <li>About</li>
            <li>home</li>
            <li>home</li>
        </ul>


    </motion.div>
  )
}

export default Sidebar