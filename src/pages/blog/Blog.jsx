import React from 'react'
import blogData from '../../blogData.json';

function Blog() {
  return (
    <div className=' flex flex-1 flex-wrap p-4 justify-start bg-slate-500 '>
        {blogData.map((blog) => (   
            <div key={blog.id} className=' border-2 flex flex-col grow-0 shrink-0 basis-[22%] m-4 p-4 rounded '>
                <div className='min-h-16'>

                <h1 className='text-lg text-center'>{blog.title}</h1>
                </div>
                <img className='w-96 h-40 object-cover my-6' src={blog.imageSrc} />
                <div className='min-h-32'>

                <p className='mb-4'>{blog.description}</p>
                </div>

                <div className='min-h-16'>

                <span>{blog.publishDate}</span>
                </div>

                <button className='mt-8 border w-36 mx-auto p-2 hover:bg-white  transition'>View More</button>
            </div>

        ))}
    </div>
  )
}

export default Blog