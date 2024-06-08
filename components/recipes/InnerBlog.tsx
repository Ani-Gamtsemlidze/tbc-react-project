import Image from "next/image";
import { monda, oleo } from "../../app/fonts";

// interface recipeData {
//   name: string;
//   image: string;
//   ingredients: string[];
//   instructions: string[];
//   difficulty: string;
//   cuisine: string;
//   prepTimeMinutes: number;
// }

// interface Props {
//   reciepeData: recipeData | null;
// }
function InnerBlog({ recipeData }: any) {
  console.log(recipeData);
  return (
    <div className="flex flex-col  w-full  bg-mainBackground dark:bg-slate-500  ">
      {recipeData ? (
        <div className="flex flex-col ">
          <h1
            className={` text-7xl my-6 ${oleo.className} text-center text-[#035C41]`}
          >
            <p>Exploring</p>
            Vegan Recipes
          </h1>
          <div className="flex my-12 pl-12 bg-[#035C41] ">
            <div className=" hover:transform hover:scale-105 transition-transform duration-300 bg-[#c6a4e3] w-[570px] h-[682px] rounded-2xl flex items-center justify-center">
              <Image
                src={recipeData.images[0]}
                alt={recipeData.title}
                width={384}
                height={384}
                className="w-[420px] h-[500px] object-cover rounded-2xl "
              />
            </div>
            <div className="flex flex-col items-start text-white ml-10 mt-12 ">
              <div className="bg-[#E895D0] min-w-24 rounded-2xl  mt-4 py-1   ">
                <p className="text-[#27343A] text-center">
                  {recipeData.category}
                </p>
              </div>
              <h1
                className={`text-7xl font-bold  mt-8 w-[700px] first-line:text-[#E895D0] leading-snug	 ${monda.className}`}
              >
                {recipeData.title}
              </h1>
              <p className="text-2xl w-96 ">{recipeData.introduction}</p>
              <p className="text-xl mt-8 ">{recipeData.servings}</p>
            </div>
          </div>
          <div className="ml-24">
            <h1 className="text-[#035C41] text-5xl w-[700px] leading-snug	">
              How to make these {recipeData.title}
            </h1>
            <p className="font-bold text-3xl text-[#035C41] mt-10 ">
              What you need
            </p>
            <ul className="list-disc list-inside my-8 ml-8">
              {recipeData.ingredients_list.map(
                (ingredient: any, index: any) => (
                  <li className="font-bold text-2xl leading-snug" key={index}>
                    {ingredient.ingredient}:
                    <span className=" ml-4 font-medium ">
                      {ingredient.quantity}
                    </span>
                  </li>
                )
              )}
            </ul>

            <div className="flex ">
              <Image
                src={recipeData.images[1]}
                alt={recipeData.title}
                width={384}
                height={384}
                className="w-96 h-96 object-cover rounded hover:transform hover:scale-105 transition-transform duration-300"
              />
              <Image
                src={recipeData.images[0]}
                alt={recipeData.title}
                width={384}
                height={384}
                className="w-96 h-96 object-cover rounded ml-4 hover:transform hover:scale-105 transition-transform duration-300 "
              />
            </div>

            <p className="font-bold text-3xl text-[#035C41] mt-10 ">
              How to make it
            </p>
            <ul className="mt-2 space-y-2 my-8 ml-8">
              {recipeData.instructions.map((instruction: any, index: any) => (
                <li className="text-[#27343A] text-xl flex   " key={index}>
                  <span className="font-bold">Step</span>{" "}
                  <p className="first-letter:font-bold ml-2">{instruction}</p>
                </li>
              ))}
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
