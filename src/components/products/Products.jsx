import React from 'react'
export default function Products({title, description,img}) {
  return (
    <div className='my-8 flex grow-0 shrink-0 basis-1/5 justify-center'>
        <div className='border-2 rounded'>

        <h1 className='text-xl font-bold text-center mt-2'>{title}</h1>
        <img className='w-64 my-4  h-48 object-cover' src={img} />
        <p className='text-base w-56 p-4'>{description}</p>
        </div>
    </div>
  )
}
