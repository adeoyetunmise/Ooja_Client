import React from 'react'

const ProdCard = ({image, title, category, price, id, description}) => {
  return (
    <div className='group h-[350px] shadow-lg shadow-gray-500 rounded-md w-56 overflow-hidden'>
        <img 
        src={image}
        alt={title}
        className='w-full h-1/2 object-cover object-center'
        />

        <div className='p-5 space-y-1 '>
            <h3 className='text-slate-900  md:text-lg text-sm md:-mt-3  '>{title.slice(0,20)}...</h3>
            <p className='font-bold'>${price}</p>
            <p className='md:text-lg text-sm capitalize text-rose-400'>{category}</p>

            <button className='border rounded w-full shadow-lg font-bold transition-all duration-150 ease-linear group-hover:bg-rose-600 group-hover:text-white md:text-lg '>Add to Cart</button>

        </div>
    </div>
  )
}

export default ProdCard