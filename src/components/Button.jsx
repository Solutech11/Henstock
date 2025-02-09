import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Button = ({width, children}) => {
  return (
    <div
      className={`md:w-${width ? width : "auto" } cursor-pointer bg-[#fbe22f] hover:bg-color-dark-2 hover:text-white text-color-dark-1 font-bold py-2 px-4 flex flex-row justify-center items-center rounded-full`}
    >
      {children} <FaLongArrowAltRight className="ml-3"/>
    </div>
  )
}

export default Button