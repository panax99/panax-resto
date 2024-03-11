import React from 'react'

interface ProductProps {
    id: number,
    image: string
}
const Product = ({ id,image } : ProductProps) => {
  return (
    <div className={`${image} rounded-xl h-full p-2 bg-slate-900 w-12/12 shadow-sm`}></div>
  )
}

export default Product