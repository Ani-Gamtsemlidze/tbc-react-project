"use client";
import { getRecipes } from "../../user-api";
import { useEffect, useState } from "react";
import { acme } from "../../app/fonts";
import RecipeCard from "./RecipeCard";
import Loading from "../../app/[locale]/(dashboard)/recipes/loading";

import { UserFeatures } from "./UserFeatures";
import { useTranslations } from "next-intl";

export interface Recipe {
  id: string;
  images: string;
  category: string[];
  preparation_time: number;
  title: string;
}

export default function RecipesPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const t = useTranslations("Recipes");

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
    <div className="flex flex-col bg-mainColor dark:bg-darkBgColor relative">
      <div className="my-6 max-lg:my-16">
        <p className="text-center text-3xl text-[#035C41] dark:text-darkTextColor">
          {t("exploring")}
        </p>
        <h1
          className={`text-center text-7xl ${acme.className} my-6 text-[#035C41] dark:text-darkTextColor`}
        >
          {t("recipes")}
        </h1>
      </div>

      <div className="max-w-[1200px] max-lg:flex-col max-lg:ml-8 max-lg:items-start max-lg:mb-4 mx-auto flex justify-center">
        <UserFeatures />

        <RecipeCard data={data} />
      </div>
    </div>
  );
}
