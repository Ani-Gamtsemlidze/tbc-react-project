import Image from "next/image";

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
    <>
      {recipeData ? (
        <div className="flex h-screen px-4 bg-gray-200 dark:bg-slate-500 items-center">
          <Image
            src="/images/blog/BlogSeries2.jpg"
            alt={recipeData.title}
            width={200}
            height={200}
            className="w-96 h-96 object-cover rounded"
          />
          <div className="ml-6">
            <h1 className="font-bold">{recipeData.title}</h1>
            <div className="flex flex-col">
              <span className="font-bold">{recipeData.category} </span>
            </div>
            <div className="flex mt-2 font-bold">
              <p>{recipeData.preparation_time}</p>
              <p className="mx-4">{recipeData.tips_and_variations}</p>
              <p>{recipeData.storage_instructions} Minutes</p>
            </div>
          </div>
        </div>
      ) : (
        <p>It&apos;s Empty Data</p>
      )}
    </>
  );
}

export { InnerBlog };
