"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiDotsHorizontal } from "react-icons/hi";
import useDropdown from "../../hooks";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin3Fill } from "react-icons/ri";
import EditRecipeForm from "./EditRecipeForm";
import { deleteUserRecipe } from "../../user-api";
import { useUser } from "@auth0/nextjs-auth0/client";

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { UserFeatures } from "./UserFeatures";
import { FaLeaf } from "react-icons/fa";

export interface Recipe {
  id: number;
  images: string;
  category: string[];
  preparation_time: number;
  title: string;
}

export default function UserRecipe({ data }: any) {
  const { handleDropDown } = useDropdown();
  const [selectedRecipeId, setSelectedRecipeId] = useState<number | null>(null);
  const [showEditForm, setShowEditForm] = useState(false);
  const { user } = useUser();

  const handleDelete = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    e.preventDefault();
    await deleteUserRecipe(id, user?.sub as string);
  };

  const handleEditFormOpen = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setShowEditForm(true);
    setSelectedRecipeId(id);
    handleDropDown();
  };

  return (
    <div className="flex flex-wrap justify-start ml-36">
      <UserFeatures />
      {data && data.length > 0 ? (
        data.map((recipe: Recipe) => (
          <div
            key={recipe.id}
            className="ml-8 border border-gray-300 px-8 py-4 rounded-lg"
          >
            <Image
              className="w-64 h-56 rounded-md object-cover"
              src={recipe.images?.[0] ?? "/images/dessert.jpg"}
              width={400}
              height={400}
              alt="recipe image"
            />

            <div className="flex items-center justify-between">
              <div className="bg-greenColor min-w-24 rounded-2xl px-6 mt-4 py-1">
                <p className="text-[#fff] text-center">{recipe.category}</p>
              </div>

              <div className="relative">
                <Menu as="div" className="relative">
                  <MenuButton className="w-12 h-12  border-greenColor dark:border-darkTextMain flex items-center justify-center cursor-pointer">
                    <HiDotsHorizontal className="text-2xl text-greenColor font-bold" />
                  </MenuButton>
                  <Transition
                    enter="transition ease-out duration-75"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <MenuItems className="bg-white dark:bg-slate-800 border border-gray-200 shadow-md rounded-xl absolute top-[2.5rem] right-[-6rem] z-50 py-4 w-60 min-h-32">
                      <MenuItem>
                        <li className="border-b border-b-gray-400 mx-3 text-[#64a643] dark:text-[#CBD5E1] flex items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700 pl-4 py-2">
                          <AiFillEdit className="text-lg" />
                          <button
                            onClick={(e) => handleEditFormOpen(e, recipe.id)}
                            className="text-black dark:text-white px-2 py-1 rounded-sm transition dark:hover:border-[#B85042]"
                          >
                            Edit Recipe
                          </button>
                        </li>
                      </MenuItem>
                      <MenuItem>
                        <li className="border-b border-b-gray-400 mx-3 text-[#B85042] dark:text-[#CBD5E1] flex items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700 pl-4 py-2">
                          <RiDeleteBin3Fill className="text-xl" />
                          <button
                            onClick={(e) => handleDelete(e, recipe.id)}
                            className="text-black dark:text-white px-2 py-1 rounded-sm transition dark:hover:border-[#B85042]"
                          >
                            Delete Recipe
                          </button>
                        </li>
                      </MenuItem>
                    </MenuItems>
                  </Transition>
                </Menu>
              </div>
            </div>

            <div className="mt-4 w-48">
              <Link href={`/recipes/${recipe.id}`} className="text-2xl">
                {recipe.title}
              </Link>
            </div>
            {showEditForm && selectedRecipeId === recipe.id && (
              <div
                onClick={() => setShowEditForm(false)}
                className="bg-[rgba(0,0,0,0.7)] flex items-center justify-center h-screen fixed top-0 w-screen right-0 z-50"
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="bg-white w-[650px] max-h-[530px] overflow-y-auto rounded-2xl fixed"
                >
                  <EditRecipeForm
                    closeForm={() => setShowEditForm(false)}
                    recipeId={selectedRecipeId}
                  />
                </div>
              </div>
            )}
          </div>
        ))
      ) : (
        <div className="flex items-center flex-col ml-16">
          <FaLeaf className="text-xl mr-3 text-greenColor" />

          <p className=" text-lg text-gray-500 break-words">
            It seems you haven't added any recipes yet.
          </p>
          <span className="text-lg text-greenColor">
            Let's contribute to our collection of vegan recipes!
          </span>
        </div>
      )}
    </div>
  );
}
