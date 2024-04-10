"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BlogPage({ data }) {
  const { recipes } = data;
  const router = useRouter()
  console.log(data)

  return (
    <div className="flex flex-col bg-gray-200 ">
      <div className="mt-4">
        <h1 className="text-center text-2xl">BLOGS</h1>
      </div>

      <div className="flex flex-wrap justify-start">
        {recipes &&
          recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="flex flex-col flex-grow-0 flex-shrink-0 w-[22%] ml-8 my-8"
            >
          <Image
                src={recipe.image}
                alt={recipe.name}
                width={384}
                height={160}
                className="w-full h-36 object-cover rounded"
              />

              <div className="my-4">
                {/* <span className="text-gray-500">{blog.publishDate}</span> */}
              </div>
              <div className="">
                <h1 className="text-lg text-left font-bold">{recipe.name}</h1>
              </div>
              <div className="my-4">
                <p className="">{recipe.cuisine}</p>
              </div>

              <button onClick={() => router.push(`/blog/${recipe.id}`)} className="mr-4 w-24 bg-transparent">READ MORE</button>
            </div>
          ))}
      </div>
    </div>
  );
}
