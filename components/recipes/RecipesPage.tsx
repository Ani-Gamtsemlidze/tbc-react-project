"use client";
import { getRecipes } from "../../user-api";
import { useEffect, useState } from "react";
import { acme, adamina } from "../../app/fonts";
import AllCategories from "../categories/AllCategories";
import RecipeCard from "./RecipeCard";
import Loading from "../../app/[locale]/(dashboard)/recipes/loading";
import { RecipesSearch } from "../search/RecipesSearch";
import AddRecipeForm from "./AddRecipeForm";
import useDropdown from "../../hooks";
// import useDropdown from "../../hooks";

export interface Recipe {
  id: string;
  images: string;
  category: string[];
  preparation_time: number;
  title: string;
}

export default function RecipesPage() {
  const { isDropDown } = useDropdown();
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
      <div className="my-6">
        <p className="text-center text-3xl text-[#035C41] dark:text-darkTextColor">
          Explore
        </p>
        <h1
          className={`text-center text-7xl ${acme.className} my-6 text-[#035C41] dark:text-darkTextColor`}
        >
          All Recipes
        </h1>
      </div>

      <div className="max-w-[1200px] mx-auto flex justify-center">
        <div className="mr-4">
          <div
            className={`flex flex-col top-32 ${isDropDown ? " " : "sticky"}`}
          >
            <AddRecipeForm />
            <div className="flex flex-col  items-center justify-start">
              <div className="w-full">
                <RecipesSearch />
              </div>
            </div>

            <div className="mt-4">
              <h1
                className={`font-bold text-[#035C41] text-3xl ${acme.className} dark:text-darkTextColor`}
              >
                Categories
              </h1>
              <ul
                className={`flex flex-col text-xl ${adamina.className} dark:text-darkTextColor`}
              >
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
