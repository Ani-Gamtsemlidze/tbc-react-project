"use client";
// import { useTranslations } from "next-intl";
import { getRecipes } from "../../user-api";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import { MdOutlineBookmark } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";

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
  // const t = useTranslations("Blogs");

  return (
    <div className="flex flex-col h-screen bg-gray-200 dark:bg-gray-700 ">
      <div className="mt-4">
        <h1 className="text-center text-2xl">Exploring Vegan Recipes</h1>
      </div>
      <div className="mt-4">
        <p className="text-center">Explore</p>
        <h1 className="text-center text-2xl">Popular Vegan Categories</h1>
        <p className="text-center">
          Find your next favorite cooking adventure.
        </p>
        <div className="text-center">SLIDER</div>
      </div>
      <h1 className="text-center text-xl mt-8">All Recipes</h1>

      <div className="flex flex-wrap justify-start">
        {data &&
          data.map((recipe: any) => (
            <div key={recipe.id} className="ml-8">
              <Image
                className="w-64  h-56 rounded-md object-cover"
                src="/images/blog/BlogSeries2.jpg"
                width={200}
                height={200}
                alt="recipe image"
              />
              <div className="flex items-center justify-between">
                <div className="bg-[#E895D0] min-w-24 rounded-2xl px-6 mt-4 py-1  ">
                  <p className="text-[#27343A] text-center">
                    {recipe.category}
                  </p>
                </div>
                <div className=" mt-4">
                  <p className="text-[#27343A] text-center">
                    {recipe.preparation_time}
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <Link href={`/recipes/${recipe.id}`} className="text-2xl ">
                  {recipe.title}
                </Link>
              </div>
              <div className="flex items-center justify-between mt-4">
                <p>STARS</p>
                {/* <MdOutlineBookmark className="text-[#E895D0] w-6 h-6 object-cover" /> */}
                <FaRegBookmark className=" w-4 h-4 object-cover" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
