"use client";

import { useEffect, useState } from "react";
import { getCategory } from "../../user-api";
import { Recipe } from "../recipes/RecipesPage";
import RecipeCard from "../recipes/RecipeCard";
import { acme, adamina, oleo } from "../../app/fonts";
import AllCategories from "./AllCategories";

interface CategoryProps {
  categoryName: string;
}

export default function Category({ categoryName }: CategoryProps) {
  const [data, setData] = useState<Recipe[]>([]);

  useEffect(() => {
    fetchCategory(categoryName);
  }, [categoryName]);

  const fetchCategory = async (categoryName: string) => {
    console.log("categoryNAME", categoryName);
    try {
      const category = await getCategory(categoryName);
      setData(category.rows || []);
    } catch (error) {
      console.error("Error fetching category:", error);
    }
  };

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <div className="flex flex-col h-screen  w-full  bg-mainBackground dark:bg-slate-500 ">
      <h1
        className={`text-center text-5xl text-[#035C41] ${oleo.className} my-12 `}
      >
        {categoryName} Recipes
      </h1>
      <div className="flex items-start">
        <div className="ml-8">
          <h1
            className={`font-bold text-[#035C41] text-3xl  ${acme.className} `}
          >
            Categories
          </h1>
          <ul className={`flex flex-col text-xl ${adamina.className}`}>
            <AllCategories />
          </ul>
        </div>{" "}
        {data.length === 0 ? (
          <p>No recipes found.</p>
        ) : (
          <RecipeCard data={data} />
        )}
      </div>
    </div>
  );
}
