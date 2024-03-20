import React from 'react'

function ContactForm({type,label,id,placeholder}) {
  return (
    <div className=' flex flex-col mt-6'>
        <label htmlFor={id} className='text-black text-lg font-medium'>{label}</label>
        {type === "input" && 
        <input
        className='w-58 mr-12 mt-2 bg-transparent outline-none border-b border-b-gray-400 pb-2 text-black'
        id={id}
        type="text"
        autoComplete='off'
        placeholder={placeholder}
        required      /> 
        }
        {type === "textarea" && <textarea id={id} className='bg-transparent border border-gray-400 outline-none text-black mt-2'  name='message'></textarea>}


 </div>
  )
}

export default ContactForm