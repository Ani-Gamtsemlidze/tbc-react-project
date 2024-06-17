"use client";
// import { useTranslations } from "next-intl";
import { getRecipes } from "../../user-api";
// import ScrollAnimation from "react-animate-on-scroll";

import { useEffect, useState } from "react";
import { acme, adamina, monda } from "../../app/fonts";
// import { monda } from "../../app/fonts";
// import { BiSolidAddToQueue } from "react-icons/bi";
import { MdAddCircleOutline } from "react-icons/md";

// import { MdOutlineBookmark } from "react-icons/md";
import AddRecipe from "./AddRecipe";
import AllCategories from "../categories/AllCategories";
import RecipeCard from "./RecipeCard";
import Loading from "../../app/[locale]/(dashboard)/recipes/loading";
import useDropdown from "../../hooks";
import { RecipesSearch } from "../search/RecipesSearch";
// import { useUser } from "@auth0/nextjs-auth0/client";

export interface Recipe {
  id: string;
  images: string;
  category: string[];
  preparation_time: number;
  title: string;
}

export default function RecipesPage() {
  const { isDropDown, handleDropDown, popupRef } = useDropdown();
  // const { user } = useUser();
  console.log(popupRef);
  const [data, setData] = useState([]);
  // const [isAddRecipe, SetIsAddRecipe] = useState(false);
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
    <div className=" flex flex-col   bg-mainColor dark:bg-gray-700 relative ">
      <div className="flex mt-4 mr-6 items-center  justify-end">
        <div
          onClick={handleDropDown}
          className="bg-[#E895D0] mr-2 justify-center w-48 h-[38px] flex items-center  cursor-pointer rounded-md px-4 py-6 "
        >
          <MdAddCircleOutline className="text-xl text-white cursor-pointer" />
          <button
            className={`text-lg font-bold ml-4  text-white  ${monda.className}`}
          >
            Add Recipe
          </button>
        </div>
        <div className=" ">
          <RecipesSearch />
        </div>
      </div>
      <div className="text-center my-8">
        <div className="flex items-center justify-center ">
          {isDropDown && (
            <div ref={popupRef}>
              <AddRecipe handleDropDown={handleDropDown} />
            </div>
          )}
        </div>
      </div>

      <div className="">
        <p className="text-center  text-3xl text-[#035C41] ">Explore</p>
        <h1
          className={`text-center text-7xl ${acme.className} my-6 text-[#035C41]`}
        >
          All Recipes
        </h1>
      </div>
      {/* <ScrollAnimation delay="1" animateIn="fadeIn" duration="2"> */}
      {/* </ScrollAnimation> */}

      <div className="flex ">
        <div className="ml-8">
          <h1
            className={`font-bold text-[#035C41] text-3xl  ${acme.className} `}
          >
            Categories
          </h1>
          <ul className={`flex flex-col text-xl ${adamina.className}`}>
            <AllCategories />
          </ul>
        </div>

        <RecipeCard data={data} />
      </div>
    </div>
  );
}
