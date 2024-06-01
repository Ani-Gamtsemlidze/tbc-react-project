"use client";
import { useTranslations } from "next-intl";
import { getRecipes } from "../../user-api";
import { useEffect, useState } from "react";

export default function RecipesPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const recipes = await getRecipes();
      console.log(recipes);
      setData(recipes);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  const t = useTranslations("Blogs");

  return (
    <div className="flex flex-col bg-gray-200 dark:bg-gray-700 ">
      <div className="mt-4">
        <h1 className="text-center text-2xl">{t("blogs")}</h1>
      </div>

      <div className="flex flex-wrap justify-start">
        {data && data.map((recipe: any) => <p>{recipe.title}</p>)}
      </div>
    </div>
  );
}
