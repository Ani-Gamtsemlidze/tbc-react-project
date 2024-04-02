import React from 'react'
import Image from 'next/image'
export default function Products({title, description,img, price}) {
  return (
    <div className='my-2 mx-1.5 flex grow-0 shrink-0 basis-1/5 '>
        <div className='border-2 rounded border-gray-900'>
            <h1 className='text-xl font-bold text-center mt-2'>{title}</h1>
            <div className='w-64 h-48'>
            <Image className='w-full my-4  h-full object-cover' src={img} alt={title} width={256} height={192} />
            </div>
            <p className=' text-gray-950 text-sm w-56 p-4'>{description.slice(0,180)}...</p>
            <p className=' text-gray-950 text-sm p-4 font-bold'>Price: ${price}</p>            
            <button className='bg-slate-300  rounded px-2 py-1 flex mt-2 mb-4 mx-auto  cursor-pointer hover:bg-white transition'>Add to Cart</button>
        </div>
    </div>
  )
}
