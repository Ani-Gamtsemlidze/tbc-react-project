"use client";
import Image from "next/image";
import Link from "next/link";
import { Recipe } from "./RecipesPage";
import { useAdmin } from "../../app/context/AdminContext";
import { HiDotsHorizontal } from "react-icons/hi";

export default function RecipeCard({ data }: any) {
  const { isAdmin } = useAdmin();

  return (
    <div className="flex  flex-wrap justify-center ">
      {data &&
        data.map((recipe: Recipe) => (
          <div
            key={recipe.id}
            className="w-[33.3%] max-sm:w-[49.3%] py-0 px-2 mb-8"
          >
            <Link
              className="w-full h-[230px] max-sm:h-[150px] block"
              href={`${process.env.BASE_URL}/recipes/${recipe.id}`}
            >
              <Image
                className="w-full h-full rounded-md object-cover hover:transform hover:scale-105 transition-transform duration-300"
                src={recipe?.images?.[0] ?? "/images/dessert.jpg"}
                width={400}
                height={400}
                alt="recipe image"
              />
            </Link>

            <div className="mt-1 ">
              <Link
                href={`${process.env.BASE_URL}/recipes/${recipe.id}`}
                className="text-2xl  "
              >
                <h3 className=" max-w-[90%] text-2xl max-sm:text-sm dark:text-darkTextColor underline-opening">
                  {recipe.title}
                </h3>
              </Link>
            </div>

            <div className="flex items-center justify-between ">
              <Link
                href={`${process.env.BASE_URL}/recipes/category/${recipe.category}`}
                className="bg-[#E895D0] dark:bg-darkSecondaryColor min-w-24 rounded-2xl px-6 mt-4 py-1  "
              >
                <span className="text-[#27343A] dark:text-darkTextColor text-center">
                  {recipe.category}
                </span>
              </Link>
              {isAdmin && (
                <div className="mt-4 cursor-pointer">
                  <HiDotsHorizontal className="text-2xl text-greenColor font-bold" />
                </div>
              )}
              <div className="relative"></div>
              <div className=" mt-4 max-sm:hidden">
                <p className="text-[#27343A] dark:text-darkTextColor text-center">
                  {recipe.preparation_time}
                </p>
              </div>
            </div>
            {/* <LoginPromptModal
              show={showLoginPrompt}
              onClose={() => setShowLoginPrompt(false)}
            /> */}
          </div>
        ))}
    </div>
  );
}
