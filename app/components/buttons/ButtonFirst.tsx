import React, { FC } from 'react'

interface ButtonProps {
    color: string,
    textButton: string,
    className: string
}
const ButtonFirst:FC<ButtonProps> = ({color,textButton,className}: ButtonProps) => {
  return (
    <button className={`${className} p-2 px-6 ${color} rounded-lg text-white transition`} style={{fontFamily: "Poppins"}}>{textButton}</button>
  )
}

export default ButtonFirst