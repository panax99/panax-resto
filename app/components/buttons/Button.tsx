import React, { FC } from 'react'

interface ButtonProps {
    color: string,
    textButton: string,
    hover: string,
    className: string
}
const Button:FC<ButtonProps> = ({color,textButton,hover,className}: ButtonProps) => {
  return (
    <button className={`${className} p-3 px-6 ${color} hover:bg-orange-500 border-red-500 rounded text-white transition`} style={{fontFamily: "Poppins"}}>{textButton}</button>
  )
}

export default Button