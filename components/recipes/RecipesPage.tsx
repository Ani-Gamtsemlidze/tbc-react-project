"use client";
// import { useTranslations } from "next-intl";
import { getRecipes } from "../../user-api";
import { useEffect, useState } from "react";
import { adamina, oleo } from "../../app/fonts";
import { monda } from "../../app/fonts";
import Image from "next/image";
import Link from "next/link";
import { BiSolidAddToQueue } from "react-icons/bi";

// import { MdOutlineBookmark } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
import Categories from "../categories/Categories";
import AddRecipe from "./AddRecipe";
import { Search } from "../search/Search";
import AllCategories from "../categories/AllCategories";

export default function RecipesPage() {
  const [data, setData] = useState([]);
  const [isAddRecipe, SetIsAddRecipe] = useState(false);

  useEffect(() => {
    fetchRecipes();
  }, []);

  function handleAddRecipe() {
    SetIsAddRecipe(!isAddRecipe);
  }

  const fetchRecipes = async () => {
    try {
      const recipes = await getRecipes();
      setData(recipes);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // const handleBookmark = async () => {
  //   try {
  //     await addToBookmarks(userId, recipeId);
  //     alert("Recipe added to bookmarks!");
  //   } catch (error) {
  //     console.error("Error adding recipe to bookmarks:", error);
  //     alert("An error occurred while adding the recipe to bookmarks.");
  //   }
  // };
  // const t = useTranslations("Blogs");

  return (
    <div className="flex flex-col bg-gray-200 dark:bg-gray-700 relative ">
      <div className="mt-4 flex items-center justify-center">
        <h1 className={`text-center text-2xl ${oleo.className}`}>
          Exploring Vegan Recipes
        </h1>
        <div className="bg-white flex items-end ">
          <Search />
        </div>
      </div>
      <div className="text-center my-8">
        <div className="flex items-center justify-center cursor-pointer">
          <div>
            <p className={`text-xl font-bold mr-4  ${monda.className}`}>
              {" "}
              Add Your Recipe
            </p>
          </div>
          <BiSolidAddToQueue onClick={handleAddRecipe} className="text-2xl" />
          {isAddRecipe && <AddRecipe />}
        </div>
        <p className={`${adamina.className} mt-4`}>
          Contribute to Our Vegan Recipe Collection!
        </p>
      </div>
      <div className="mt-4">
        <h1 className={`text-center text-2xl ${monda.className}`}>
          Popular Vegan Categories
        </h1>

        <p className={`text-center ${adamina.className} `}>
          Find your next favorite cooking adventure.
        </p>
        <Categories />
      </div>
      <h1 className="text-center text-2xl my-8 font-bold ">All Recipes</h1>
      <div className="flex ">
        <div className="ml-8">
          <h1 className={`font-bold text-2xl ${monda.className} `}>
            Categories
          </h1>
          <ul className={`flex flex-col text-xl ${adamina.className}`}>
            <AllCategories />
          </ul>
        </div>
        <div className="flex flex-wrap justify-start">
          {data &&
            data.map((recipe: any) => (
              <div key={recipe.id} className="ml-8">
                {recipe.images.length > 0 && (
                  <Image
                    className="w-64 h-56 rounded-md object-cover"
                    src={recipe.images[0]}
                    width={400}
                    height={400}
                    alt="recipe image"
                  />
                )}
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
                  <FaRegBookmark
                    // onClick={handleBookmark}
                    className="cursor-pointer w-4 h-4 object-cover"
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
