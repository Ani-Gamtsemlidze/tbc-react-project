import React from 'react'
export default function Products({title, description,img}) {
  return (
    <div className='my-8 flex grow-0 shrink-0 basis-1/5 justify-center'>
            <div className='border-2 rounded'>
            <h1 className='text-xl font-bold text-center mt-2'>{title}</h1>
            <img className='w-64 my-4  h-48 object-cover' src={img} />
            <p className=' text-gray-950 text-sm     w-56 p-4'>{description}</p>
            <button className='bg-slate-300  rounded px-2 py-1 flex mt-2 mx-auto mb-2 cursor-pointer hover:bg-white transition'>Add to Cart</button>
        </div>
    </div>
  )
}
