"use client";
import Image from "next/image";
import { monda, oleo } from "../../app/fonts";
import { useTranslations } from "next-intl";

function InnerRecipe({ recipeData }: any) {
  const t = useTranslations("Recipes");
  return (
    <div className="flex flex-col w-full bg-mainColor dark:bg-darkBgColor">
      {recipeData ? (
        <div className="flex flex-col">
          <h1
            className={`text-7xl my-6 ${oleo.className} text-center text-[#035C41] dark:text-darkTextColor`}
          >
            <p>{t("exploring")}</p>
            {t("recipes")}
          </h1>
          <div className="flex my-12 bg-[#035C41] dark:bg-darkSecondaryColor">
            <div className="max-w-[1200px] max-sm:flex-col  flex mx-auto py-8 px-0">
              <div className="hover:transform hover:scale-105 transition-transform duration-300 rounded-2xl flex  justify-center">
                <Image
                  src={recipeData?.images?.[0] ?? "/images/dessert.jpg"}
                  alt={recipeData.title}
                  width={400}
                  height={400}
                  className="w-[390px] h-[325px] object-cover rounded-2xl max-w-[max-content] "
                />
              </div>
              <div className="flex flex-col items-start text-white dark:text-darkTextColor ml-10">
                <div className="bg-[#E895D0] dark:bg-darkSecondaryColor min-w-24 rounded-2xl mt-4 py-1">
                  <p className="text-[#27343A] dark:text-darkTextColor text-center">
                    {recipeData.category}
                  </p>
                </div>
                <h1
                  className={`text-5xl mt-3 font-bold mb-5 dark:text-darkTextColor max-w-[700px] w-full leading-tight ${monda.className}`}
                >
                  {recipeData.title}
                </h1>
                <div className="">
                  <p className="text-2xl  dark:text-darkTextColor">
                    {recipeData.introduction}
                  </p>
                </div>
                <div className="">
                  <p className="text-xl mt-8 dark:text-darkTextColor">
                    {recipeData.servings}
                  </p>
                  <p className="text-lg mt-8 dark:text-darkTextColor">
                    Nutritional Information:{" "}
                    {recipeData.nutritional_information}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-24 max-sm:ml-8">
            <h1 className="text-[#035C41] dark:text-darkTextMain text-5xl max-sm:text-2xl max-w-[700px] leading-snug">
              How to make these {recipeData.title}
            </h1>
            <p className="font-bold text-3xl text-[#035C41] dark:text-darkTextMain mt-10">
              What you need
            </p>
            <ul className="my-4 pl-6">
              {recipeData.ingredients_list.map(
                (ingredient: string, index: number) => (
                  <li
                    className="dark:text-darkTextColor list-disc text-xl leading-snug"
                    key={index}
                  >
                    <p>{ingredient}</p>
                  </li>
                )
              )}
            </ul>

            <div className="flex max-sm:flex-col max-sm:mt-4">
              <Image
                src={recipeData?.images?.[1] ?? "/images/dessert.jpg"}
                alt={recipeData.title}
                width={384}
                height={384}
                className="w-96 h-96  object-cover rounded hover:transform hover:scale-105 transition-transform duration-300"
              />
              <Image
                src={recipeData?.images?.[2] ?? "/images/dessert.jpg"}
                alt={recipeData.title}
                width={384}
                height={384}
                className="w-96 h-96 object-cover rounded ml-4 max-sm:ml-0 max-sm:mt-3 hover:transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-bold text-3xl text-[#035C41] dark:text-darkTextMain mt-10">
              How to make it
            </h3>
            <ul className="my-4 pl-5">
              {recipeData.instructions.map(
                (ingredient: string, index: number) => (
                  <li
                    className=" dark:text-darkTextColor list-decimal text-xl leading-snug"
                    key={index}
                  >
                    <p>{ingredient}</p>
                  </li>
                )
              )}
            </ul>
            <div className="my-4 ">
              <h3 className="font-bold text-3xl text-[#035C41] dark:text-darkTextMain mt-10">
                Tips And Variations
              </h3>
              <p className="dark:text-darkTextColor mt-2">
                {recipeData.tips_and_variations}
              </p>
            </div>
            <div className="my-4 ">
              <h3 className="font-bold text-3xl text-[#035C41] dark:text-darkTextMain mt-10">
                Storge Instructions
              </h3>
              <p className="dark:text-darkTextColor mt-2">
                {recipeData.storage_instructions}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>Empty Data</p>
      )}
    </div>
  );
}

export { InnerRecipe };
