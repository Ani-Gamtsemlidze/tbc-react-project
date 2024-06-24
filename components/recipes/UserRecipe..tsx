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
import { useTranslations } from "next-intl";

export interface Recipe {
  id: number;
  images: string;
  category: string[];
  preparation_time: number;
  title: string;
}

export default function UserRecipe({ data }: any) {
  const t = useTranslations("UserRecipe");
  const { handleDropDown } = useDropdown();
  const [selectedRecipeId, setSelectedRecipeId] = useState<number | null>(null);
  const [showEditForm, setShowEditForm] = useState(false);
  const { user } = useUser();

  const handleDelete = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    e.preventDefault();
    handleDropDown();
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
    <div className=" flex-wrap  max-w-[900px]  flex justify-center">
      <UserFeatures />
      {data && data.length > 0 ? (
        data.map((recipe: Recipe) => (
          <div
            key={recipe.id}
            className="ml-8 border border-gray-300 px-8 py-4 rounded-lg"
          >
            <div className="relative h-56 w-64 mb-4 rounded-md overflow-hidden">
              <Image
                className="w-full h-full object-cover"
                src={recipe.images?.[0] ?? "/images/dessert.jpg"}
                alt="recipe image"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="bg-greenColor min-w-24 rounded-2xl px-6 mt-4 py-1">
                <p className="text-white text-center">{recipe.category}</p>
              </div>

              <div className="relative">
                <Menu>
                  <MenuButton className="w-12 h-12 border-greenColor dark:border-darkTextMain flex items-center justify-center cursor-pointer">
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
                        <div className="flex items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700 pl-4 py-2">
                          <AiFillEdit className="text-lg text-[#64a643] dark:text-[#CBD5E1]" />
                          <button
                            onClick={(e) => handleEditFormOpen(e, recipe.id)}
                            className="text-black dark:text-white ml-2 transition hover:text-[#B85042]"
                          >
                            Edit Recipe
                          </button>
                        </div>
                      </MenuItem>
                      <MenuItem>
                        <div className="flex items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700 pl-4 py-2">
                          <RiDeleteBin3Fill className="text-xl text-[#B85042] dark:text-[#CBD5E1]" />
                          <button
                            onClick={(e) => handleDelete(e, recipe.id)}
                            className="text-black dark:text-white ml-2 transition hover:text-[#B85042]"
                          >
                            Delete Recipe
                          </button>
                        </div>
                      </MenuItem>
                    </MenuItems>
                  </Transition>
                </Menu>
              </div>
            </div>

            <div className="mt-4">
              <Link
                className="text-2xl font-bold hover:underline"
                href={`/recipes/${recipe.id}`}
              >
                {recipe.title}
              </Link>
            </div>

            {showEditForm && selectedRecipeId === recipe.id && (
              <div
                onClick={() => setShowEditForm(!showEditForm)}
                className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.7)] backdrop-blur-sm"
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="bg-white w-[650px] max-h-[530px] overflow-y-auto rounded-2xl"
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
        <div className="flex items-center flex-col ml-36">
          <FaLeaf className="text-4xl mb-4 text-greenColor dark:text-darkSecondaryColor" />
          <p className="text-lg text-gray-500 dark:text-darkTextMain mb-2">
            {t("noRecipe")}
          </p>
          <p className="text-lg text-greenColor dark:text-darkTextMain ">
            {t("contribute")}
          </p>
        </div>
      )}
    </div>
  );
}
