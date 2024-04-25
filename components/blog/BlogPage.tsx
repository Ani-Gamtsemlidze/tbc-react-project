"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BlogPage({ data }) {
  const t = useTranslations("Blogs");
  const { recipes } = data;
  const router = useRouter();

  return (
    <div className="flex flex-col bg-gray-200 dark:bg-gray-700 ">
      <div className="mt-4">
        <h1 className="text-center text-2xl">{t("blogs")}</h1>
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
                <p className="text-gray-500">
                  {recipe.cookTimeMinutes}
                  <span> Minutes</span>
                </p>
              </div>
              <div className="">
                <h1 className="text-lg text-left font-bold">{recipe.name}</h1>
              </div>
              <div>
                <p>{recipe.instructions[0]}</p>
              </div>
              <div className="my-4">
                {recipe.mealType.map((meal, index) => (
                  <span key={index}>
                    {meal}
                    {index !== recipe.mealType.length - 1 && ", "}
                  </span>
                ))}
              </div>

              <button
                onClick={() => router.push(`/blog/${recipe.id}`)}
                className="bg-slate-300 hover:bg-slate-400 rounded px-2 py-1 flex  w-28 flex-start cursor-pointer transition"
              >
                READ MORE
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
