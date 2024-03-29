import React from 'react'
export default function Products({title, description,img, price}) {
  return (
    <div className='my-4 mx-2 flex grow-0 shrink-0 basis-1/6 justify-center'>
            <div className='border-2 rounded border-gray-900'>
            <h1 className='text-xl font-bold text-center mt-2'>{title}</h1>
            <img className='w-64 my-4  h-48 object-cover' src={img} />
            <p className=' text-gray-950 text-sm w-56 p-4'>{description}</p>
            <p className=' text-gray-950 text-sm p-4 font-bold'>Price: ${price}</p>            
            <button className='bg-slate-300  rounded px-2 py-1 flex mt-2 mb-4 mx-auto  cursor-pointer hover:bg-white transition'>Add to Cart</button>
        </div>
    </div>
  )
}
