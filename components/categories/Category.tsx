"use client";

import { useEffect, useState } from "react";
import { getCategory } from "../../user-api";
import { Recipe } from "../recipes/RecipesPage";
import RecipeCard from "../recipes/RecipeCard";
import { oleo } from "../../app/fonts";
import { UserFeatures } from "../recipes/UserFeatures";
import Loading from "../../app/[locale]/loading";

interface CategoryProps {
  categoryName: string;
}

export default function Category({ categoryName }: CategoryProps) {
  const [data, setData] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true); // Introduce loading state

  useEffect(() => {
    fetchCategory(categoryName);
  }, [categoryName]);

  const fetchCategory = async (categoryName: string) => {
    console.log("categoryNAME", categoryName);
    try {
      setLoading(true); // Set loading to true before fetching data
      const category = await getCategory(categoryName);
      setData(category.rows || []);
    } catch (error) {
      console.error("Error fetching category:", error);
    } finally {
      setLoading(false); // Set loading to false after data is fetched or on error
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col min-h-screen w-full bg-mainColor dark:bg-slate-500">
      <h1
        className={`text-center text-5xl text-[#035C41] ${oleo.className} my-12`}
      >
        {categoryName} Recipes
      </h1>
      <div className="max-w-[1200px] mx-auto flex justify-center">
        <UserFeatures />
        <div>
          <RecipeCard data={data} />
        </div>
      </div>
    </div>
  );
}
