import Image from "next/image";

export default function BlogPage({ data }) {
  const { blogs } = data;
  console.log(data)

  return (
    <div className="flex flex-col bg-gray-200 ">
      <div className="mt-4">
        <h1 className="text-center text-2xl">BLOGS</h1>
      </div>

      <div className="flex flex-wrap justify-start">
        {blogs &&
          blogs.map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col flex-grow-0 flex-shrink-0 w-[22%] ml-8 my-8"
            >
              {/* <Image
                className="w-full h-36 object-cover rounded"
                src={{ href: blog.imageSrc, width: 384 }}
                alt={blog.title}
                width={384}
                height={160}
              /> */}

              <div className="my-4">
                {/* <span className="text-gray-500">{blog.publishDate}</span> */}
              </div>
              <div className="">
                <h1 className="text-lg text-left font-bold">{blog.name}</h1>
              </div>
              <div className="my-4">
                <p className="">{blog.cuisine}</p>
              </div>

              <button className="mr-4 w-24 bg-transparent">READ MORE</button>
            </div>
          ))}
      </div>
    </div>
  );
}
