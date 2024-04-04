import blogData from "../../data/blogData.json"
import Image from "next/image";
export default function Blog() {
    return (
        <div className="flex flex-col bg-gray-200 ">
            <div className="mt-4">

        <h1 className="text-center text-2xl">BLOGS</h1>
            </div>
        
        <div className=' flex flex-wrap justify-start  '>

        {blogData.map((blog) => (   
            <div key={blog.id} className='  flex flex-col grow-0 shrink-0 basis-[22%] ml-8 my-8 '>
                   
                <Image className='w-full h-36 object-cover rounded'
                    src={blog.imageSrc}
                    alt={blog.title}
                    width={384}
                    height={160}
                     />
                    
                <div className='my-4'>

<span className="text-gray-500">{blog.publishDate}</span>
</div>
                <div className=''>

                <h1 className='text-lg text-left font-bold'>{blog.title}</h1>
                </div>
                <div className=' my-4'>

                <p className=''>{blog.description}</p>
                </div>


                <button className=' mr-4 w-24 bg-transparent'>READ MORE</button>
            </div>  

        ))}
    </div>

        </div>
    );
}

