import React from 'react'


type Props = React.ButtonHTMLAttributes<HTMLButtonElement>& {
text:string


}

const Button = ({onClick,className,text}: Props) => {
  return (
  <button onClick={onClick} className={` ${className} bg-bg1 border-[1px] text-xl max-w-max border-black-900 px-5 py-2  hover:translate-x-[-2px] rounded-md hover:translate-y-[-2px] hover:border-b-2  hover:border-r-2 transition duration-200 ease-linear `} >
    {text}
  </button>
  )
}

export default Button