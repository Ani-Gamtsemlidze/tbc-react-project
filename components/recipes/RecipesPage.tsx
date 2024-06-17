"use client";
import { getRecipes } from "../../user-api";
import { useEffect, useState } from "react";
import { acme, adamina, monda } from "../../app/fonts";
import { MdAddCircleOutline } from "react-icons/md";
import AddRecipe from "./AddRecipe";
import AllCategories from "../categories/AllCategories";
import RecipeCard from "./RecipeCard";
import Loading from "../../app/[locale]/(dashboard)/recipes/loading";
import useDropdown from "../../hooks";
import { RecipesSearch } from "../search/RecipesSearch";

export interface Recipe {
  id: string;
  images: string;
  category: string[];
  preparation_time: number;
  title: string;
}

export default function RecipesPage() {
  const { isDropDown, handleDropDown, popupRef } = useDropdown();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const recipes = await getRecipes();
      setData(recipes);
      setLoading(true);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  if (!loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col bg-mainColor dark:bg-gray-700 relative">
      {/* <div className="flex mt-4 mr-6 items-center justify-end">
        <div
          onClick={handleDropDown}
          className="bg-[#E895D0] mr-2 justify-center w-48 h-[38px] flex items-center cursor-pointer rounded-md px-4 py-6"
        >
          <MdAddCircleOutline className="text-xl text-white cursor-pointer" />
          <button
            className={`text-lg font-bold ml-4 text-white ${monda.className}`}
          >
            Add Recipe
          </button>
        </div>
        <div>
          <RecipesSearch />
        </div>
      </div>
      <div className="text-center my-8">
        <div className="flex items-center justify-center">
          {isDropDown && (
            <div ref={popupRef}>
              <AddRecipe handleDropDown={handleDropDown} />
            </div>
          )}
        </div>
      </div> */}

      <div className="my-6">
        <p className="text-center text-3xl text-[#035C41]">Explore</p>
        <h1
          className={`text-center text-7xl ${acme.className} my-6 text-[#035C41]`}
        >
          All Recipes
        </h1>
      </div>

      <div className="max-w-[1200px] mx-auto flex justify-center">
        <div className="mr-4">
          <div className="sticky top-32">
            <div className="flex flex-col  items-center justify-start">
              <div
                onClick={handleDropDown}
                className="bg-[#E895D0] mb-4  justify-center w-52 h-[38px] flex items-center cursor-pointer rounded-md px-4 py-6"
              >
                <MdAddCircleOutline className="text-xl text-white cursor-pointer" />
                <button
                  className={`text-lg font-bold ml-4 text-white ${monda.className}`}
                >
                  Add Recipe
                </button>
              </div>
              <div className="w-full">
                <RecipesSearch />
              </div>
            </div>
            {isDropDown && (
              <div className=" dropdown-recipe text-center my-4">
                <div className="flex items-center justify-center">
                  <div ref={popupRef}>
                    <AddRecipe handleDropDown={handleDropDown} />
                  </div>
                </div>
              </div>
            )}
            <div className="mt-4">
              <h1
                className={`font-bold text-[#035C41] text-3xl ${acme.className}`}
              >
                Categories
              </h1>
              <ul className={`flex flex-col text-xl ${adamina.className}`}>
                <AllCategories />
              </ul>
            </div>
          </div>
        </div>

        <RecipeCard data={data} />
      </div>
    </div>
  );
}
