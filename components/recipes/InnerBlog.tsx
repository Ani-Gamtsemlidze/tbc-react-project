"use client";
import Image from "next/image";
import { monda, oleo } from "../../app/fonts";

function InnerBlog({ recipeData }: any) {
  return (
    <div className="flex flex-col w-full bg-mainColor dark:bg-slate-500">
      {recipeData ? (
        <div className="flex flex-col">
          <h1
            className={`text-7xl my-6 ${oleo.className} text-center text-[#035C41]`}
          >
            <p>Exploring</p>
            Vegan Recipes
          </h1>
          <div className="flex my-12 bg-[#035C41]">
            <div className="max-w-[1200px] flex mx-auto py-8 px-0">
              <div className="hover:transform hover:scale-105 transition-transform duration-300 rounded-2xl flex  justify-center">
                <Image
                  src={recipeData?.images?.[0] ?? "/images/dessert.jpg"}
                  alt={recipeData.title}
                  width={400}
                  height={400}
                  className="w-[390px] h-[270px] object-cover rounded-2xl max-w-[max-content] "
                />
              </div>
              <div className="flex flex-col items-start text-white ml-10">
                <div className="bg-[#E895D0] min-w-24 rounded-2xl mt-4 py-1">
                  <p className="text-[#27343A] text-center">
                    {recipeData.category}
                  </p>
                </div>
                <h1
                  className={`text-5xl mt-3 font-bold mb-5 w-[700px] leading-tight ${monda.className}`}
                >
                  {recipeData.title}
                </h1>
                <div className="">
                  <p className="text-2xl ">{recipeData.introduction}</p>
                </div>
                <p className="text-xl mt-8">{recipeData.servings}</p>
              </div>
            </div>
          </div>
          <div className="ml-24">
            <h1 className="text-[#035C41] text-5xl w-[700px] leading-snug">
              How to make these {recipeData.title}
            </h1>
            <p className="font-bold text-3xl text-[#035C41] mt-10">
              What you need
            </p>
            <ul className="my-4 pl-6">
              {recipeData.ingredients_list.map(
                (ingredient: string, index: number) => (
                  <li className=" list-disc text-xl leading-snug" key={index}>
                    <p>{ingredient}</p>
                  </li>
                )
              )}
            </ul>

            <div className="flex">
              <Image
                src={recipeData?.images?.[1] ?? "/images/dessert.jpg"}
                alt={recipeData.title}
                width={384}
                height={384}
                className="w-96 h-96 object-cover rounded hover:transform hover:scale-105 transition-transform duration-300"
              />
              <Image
                src={recipeData?.images?.[2] ?? "/images/dessert.jpg"}
                alt={recipeData.title}
                width={384}
                height={384}
                className="w-96 h-96 object-cover rounded ml-4 hover:transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-bold text-3xl text-[#035C41] mt-10">
              How to make it
            </h3>
            <ul className="my-4 pl-5">
              {recipeData.instructions.map(
                (ingredient: string, index: number) => (
                  <li
                    className=" list-decimal text-xl leading-snug"
                    key={index}
                  >
                    <p>{ingredient}</p>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      ) : (
        <p>Empty Data</p>
      )}
    </div>
  );
}

export { InnerBlog };

// {/* <ul>
// {recipeData.ingredients_list.map(
//   (ingredient: any, index: number) => (
//     <li className="font-bold text-2xl leading-snug" key={index}>
//       <p>{ingredient}</p>
//       {/* Display ingredient and quantity */}
//       {/* <span className="ml-4 font-medium">
//         {ingredient.quantity}
//       </span> */}
//     </li>
//   )
// )}
// </ul> */}

// <ul className="mt-2 space-y-2 my-8 ml-8">
// {recipeData.instructions.map((instruction: any, index: any) => (
//   <li className="text-[#27343A] text-xl flex" key={index}>
//     <span className="font-bold">Step</span>
//     <p className="first-letter:font-bold ml-2">{instruction}</p>
//   </li>
// ))}
// </ul>
