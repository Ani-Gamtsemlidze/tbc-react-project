import blogData from "../../data/blogData.json"
import Image from "next/image";
export default function Blog() {
    return (
        <div className=' flex flex-1 flex-wrap p-4 justify-start bg-gray-200 '>
        {blogData.map((blog) => (   
            <div key={blog.id} className=' border-2 border-gray-900 flex flex-col grow-0 shrink-0 basis-[22%] m-4 px-6  rounded '>
                   
                <Image   className='my-4'
                    src="/images/products/item-1.jpg"
                    alt={blog.title}
                    width={384}
                    height={160}
                    style={{ objectFit: "cover" }} />
                <div className='min-h-16'>

                <h1 className='text-lg text-left'>{blog.title}</h1>
                </div>
                <div className='min-h-32 mt-2'>

                <p className='mb-4'>{blog.description}</p>
                </div>

                <div className='min-h-16'>

                <span>{blog.publishDate}</span>
                </div>

                <button className='my-4 border bg-slate-900 text-white w-36 mx-auto p-2'>View More</button>
            </div>

        ))}
    </div>
    );
}
