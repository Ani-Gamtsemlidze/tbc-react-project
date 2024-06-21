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
          <div key={recipe.id} className="w-[33.3%] py-0 px-2 mb-8">
            <Link
              className="w-full h-[230px] block"
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
                <h3 className=" max-w-[90%] text-2xl dark:text-darkTextColor underline-opening">
                  {recipe.title}
                </h3>

                {/* <p className="text-lg my-4 w-52 group relative ">
                  <span>{recipe.title}</span>
                  <span className="absolute -bottom-1 left-0 w-0 transition-all h-[1px] bg-greenColor group-hover:w-56"></span>
                </p> */}
              </Link>
            </div>

            <div className="flex items-center justify-between">
              <Link
                href={`${process.env.BASE_URL}/recipes/category/${recipe.category}`}
                className="bg-[#E895D0] dark:bg-darkSecondaryColor min-w-24 rounded-2xl px-6 mt-4 py-1  "
              >
                <span className="text-[#27343A] dark:text-darkTextColor text-center">
                  {recipe.category}
                </span>
              </Link>
              {isAdmin && (
                <div
                  // onClick={(e) => handleEditClick(recipe.id, e)}
                  className="mt-4 cursor-pointer"
                >
                  <HiDotsHorizontal className="text-2xl text-greenColor font-bold" />
                </div>
              )}
              <div className="relative">
                {/* {selectedRecipeId === recipe.id && isDropDown && (
                  <ul
                    onClick={(e) => e.stopPropagation()}
                    id="dropdown"
                    className="bg-white dark:bg-slate-800 border border-greenColor shadow-md rounded absolute top-0 right-[-40px] z-50 py-4 w-52 min-h-48"
                  >
                    <li className="border-b border-b-gray-400 mx-3 text-[#64a643] dark:text-[#CBD5E1] flex items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700 pl-4 py-2">
                      <AiFillEdit className="text-lg" />
                      <button
                        onClick={(e) => handleEditFormOpen(e, recipe.id)}
                        className="text-black dark:text-white px-2 py-1 rounded-sm transition dark:hover:border-[#B85042]"
                      >
                        Edit Recipe
                      </button>
                    </li>
                    <li className="border-b border-b-gray-400 mx-3 text-[#B85042] dark:text-[#CBD5E1] flex items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700 pl-4 py-2">
                      <RiDeleteBin3Fill className="text-xl" />
                      <button
                        onClick={(e) => handleDelete(e, recipe.id)}
                        className="text-black dark:text-white px-2 py-1 rounded-sm transition dark:hover:border-[#B85042]"
                      >
                        Delete Recipe
                      </button>
                    </li>
                  </ul>
                )} */}
              </div>

              {/* {showEditForm && selectedRecipeId === recipe.id && (
                <div
                  onClick={() => setShowEditForm(false)}
                  className="bg-[rgba(0,0,0,0.7)] flex items-center justify-center h-screen fixed top-0 w-screen right-0 z-50"
                >
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white w-[650px] max-h-[700px] overflow-y-auto rounded-2xl fixed"
                  >
                    <EditRecipeForm recipeId={selectedRecipeId} />
                  </div>
                </div>
              )} */}
              <div className=" mt-4">
                <p className="text-[#27343A] dark:text-darkTextColor text-center">
                  {recipe.preparation_time}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
