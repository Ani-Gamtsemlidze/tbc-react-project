"use client";
// import { useTranslations } from "next-intl";
import { getRecipes } from "../../user-api";
// import ScrollAnimation from "react-animate-on-scroll";

import { useEffect, useState } from "react";
import { acme, adamina, inter, oleo } from "../../app/fonts";
import { monda } from "../../app/fonts";
import { BiSolidAddToQueue } from "react-icons/bi";

// import { MdOutlineBookmark } from "react-icons/md";
import Categories from "../categories/Categories";
import AddRecipe from "./AddRecipe";
import { Search } from "../search/Search";
import AllCategories from "../categories/AllCategories";
import RecipeCard from "./RecipeCard";
import Loading from "../../app/[locale]/(dashboard)/recipes/loading";
import useDropdown from "../../hooks";

export interface Recipe {
  id: string;
  images: string[];
  category: string[];
  preparation_time: number;
  title: string;
}

export default function RecipesPage() {
  const { isDropDown, handleDropDown, popupRef } = useDropdown();
  console.log(popupRef);
  const [data, setData] = useState([]);
  // const [isAddRecipe, SetIsAddRecipe] = useState(false);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   function handleClickOutside(event: MouseEvent) {
  //     if (
  //       popupRef.current &&
  //       !popupRef.current.contains(event.target as Node)
  //     ) {
  //       SetIsAddRecipe(false);
  //     }
  //   }

  //   if (isAddRecipe) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   } else {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [isAddRecipe]);

  // useEffect(() => {
  //   if (isAddRecipe) {
  //     document.body.classList.add("overflow-hidden");
  //   } else {
  //     document.body.classList.remove("overflow-hidden");
  //   }
  //   return () => {
  //     document.body.classList.remove("overflow-hidden");
  //   };
  // }, [isAddRecipe]);

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
    <div className=" flex flex-col    bg-mainBackground dark:bg-gray-700 relative ">
      <div className="mt-4 flex items-center justify-center">
        <h1
          className={`text-center text-7xl my-6 ${oleo.className} text-[#035C41]`}
        >
          <p>Exploring</p>
          Vegan Recipes
        </h1>
        <div className="bg-white flex items-end ">
          <Search />
        </div>
      </div>
      <div className="text-center my-8">
        <div className="flex items-center justify-center ">
          <div>
            <p
              className={`text-3xl font-bold mr-4 text-[#035C41]   ${monda.className}`}
            >
              {" "}
              Add Your Recipe
            </p>
          </div>
          <BiSolidAddToQueue
            onClick={handleDropDown}
            className="text-2xl text-[#035C41] cursor-pointer"
          />
          {isDropDown && (
            <div ref={popupRef}>
              <AddRecipe handleDropDown={handleDropDown} />
            </div>
          )}
        </div>
        <p className={`${adamina.className} mt-4 text-xl text-[#035C41]  `}>
          Contribute to Our Vegan Recipe Collection!
        </p>
      </div>
      <div className="mt-4">
        <p className="text-center  text-3xl text-[#035C41] ">Explore</p>

        <h1
          className={`text-center mt-3 text-6xl ${acme.className} text-[#035C41]`}
        >
          Popular Vegan Categories
        </h1>

        <p
          className={`text-center text-xl text-[#27343A] ${inter.className} mt-6 `}
        >
          Find your next favorite cooking adventure.
        </p>
        <Categories />
      </div>
      <div className="mt-24">
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
