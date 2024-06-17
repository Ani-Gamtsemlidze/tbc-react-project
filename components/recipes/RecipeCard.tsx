"use client";
import Image from "next/image";
import Link from "next/link";
import { Recipe } from "./RecipesPage";
import { useAdmin } from "../../app/context/AdminContext";
import { HiDotsHorizontal } from "react-icons/hi";
// import { useState } from "react";
// import useDropdown from "../../hooks";
// import { AiFillEdit } from "react-icons/ai";
// import { RiDeleteBin3Fill } from "react-icons/ri";
// import EditRecipeForm from "./EditRecipeForm";
// import { deleteUserRecipe } from "../../user-api";
// import { useUser } from "@auth0/nextjs-auth0/client";

export default function RecipeCard({ data }: any) {
  const { isAdmin } = useAdmin();
  // const { user } = useUser();

  // const [selectedRecipeId, setSelectedRecipeId] = useState<number | null>(null);

  // const { isDropDown, handleDropDown } = useDropdown();
  // const [showEditForm, setShowEditForm] = useState(false);

  // const handleDelete = async (
  //   e: React.MouseEvent<HTMLButtonElement>,
  //   id: number
  // ) => {
  //   e.preventDefault();
  //   await deleteUserRecipe(id, user?.sub as string);
  // };

  // const handleEditClick = (id: number, e: React.MouseEvent<HTMLDivElement>) => {
  //   e.stopPropagation();
  //   if (selectedRecipeId === id && isDropDown) {
  //     setSelectedRecipeId(null);
  //     handleDropDown();
  //   } else {
  //     setSelectedRecipeId(id);
  //     if (!isDropDown) {
  //       handleDropDown();
  //     }
  //   }
  // };

  // const handleEditFormOpen = (
  //   e: React.MouseEvent<HTMLButtonElement>,
  //   id: number
  // ) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   setShowEditForm(true);
  //   setSelectedRecipeId(id);
  //   handleDropDown();
  // };

  return (
    <div className="flex flex-wrap justify-start ml-36">
      {data &&
        data.map((recipe: Recipe) => (
          <div key={recipe.id} className="ml-8">
            <Image
              className="w-64 h-56 rounded-md object-cover"
              src={recipe?.images?.[0] ?? "/images/dessert.jpg"}
              width={400}
              height={400}
              alt="recipe image"
            />

            <div className="flex items-center justify-between">
              <div className="bg-[#E895D0] min-w-24 rounded-2xl px-6 mt-4 py-1  ">
                <p className="text-[#27343A] text-center">{recipe.category}</p>
              </div>
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
                <p className="text-[#27343A] text-center">
                  {recipe.preparation_time}
                </p>
              </div>
            </div>

            <div className="mt-4 w-48">
              <Link
                href={`${process.env.BASE_URL}/recipes/${recipe.id}`}
                className="text-2xl"
              >
                {recipe.title}
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}
