import React from 'react'
import blogData from '../../blogData.json';

function Blog() {
  return (
    <div className='my-8 flex flex-1 flex-wrap px-4 justify-center'>
        {blogData.map((blog) => (
            <div className='flex flex-col grow-0 shrink-0 basis-1/4 m-2 bg-slate-600 p-4 rounded'>
                <h1 className='text-lg'>{blog.title}</h1>
                <img className='w-96 h-40 object-cover my-6' src={blog.imageSrc} />
                <p className='mb-4'>{blog.description}</p>
                <span>{blog.publishDate}</span>

            </div>

        ))}
    </div>
  )
}

export default Blog