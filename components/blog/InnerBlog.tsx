import Image from "next/image";

export default function InnerBlog({ blogsData }) {
  return (
    <>
      {blogsData ? (
        <div className="flex h-screen px-4 bg-gray-200 dark:bg-slate-500 items-center">
          <Image
            src={blogsData.image}
            alt={blogsData.name}
            width={200}
            height={200}
            className="w-96 h-96 object-cover rounded"
          />
          <div className="ml-6">
            <h1 className="font-bold">{blogsData.name}</h1>
            <div className="flex flex-col">
              <span className="font-bold">Ingredients: </span>
              <div className="flex flex-wrap">
                {blogsData.ingredients.map((ingredient, index) => (
                  <p key={index}>
                    {ingredient}
                    {index !== blogsData.ingredients.length - 1 && ", "}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold">Instructions: </span>
              <div>
                {blogsData.instructions.map((instruction, index) => (
                  <p key={index}>{instruction}</p>
                ))}
              </div>
            </div>
            <div className="flex mt-2 font-bold">
              <p>{blogsData.difficulty}</p>
              <p className="mx-4">{blogsData.cuisine}</p>
              <p>{blogsData.prepTimeMinutes} Minutes</p>
            </div>
          </div>
        </div>
      ) : (
        <p>It&apos;s Empty Data</p>
      )}
    </>
  );
}
