import React from 'react'

function CompanyContact({image,info}) {
  return (
    <>
    <div className='flex items-center'>

    <div className='w-12 h-12 rounded-[50%] bg-cyan-500 flex items-center justify-center mt-6 mr-4'>
    <img className='w-6 h-6 object-cover' src={image}  />
    </div>
    <p className='text-base mt-6'>{info}</p>
    </div>
  </>  )
}

export default CompanyContact