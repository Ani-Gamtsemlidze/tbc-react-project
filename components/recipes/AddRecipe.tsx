"use client";
import React, { useEffect, useState } from "react";
import { oleo } from "../../app/fonts";
import { IoMdClose } from "react-icons/io";

// import * as Yup from "yup";
import { useUser } from "@auth0/nextjs-auth0/client";

import { FormikErrors } from "formik";
import { getAllCategories } from "../../user-api";
// import FormField from "../recipeForm/FormField";
// import SelectField from "../recipeForm/SelectField";
// import NumberInputField from "../recipeForm/NumberInputField";
// import TextareaField from "../recipeForm/TextareaFild";
// import UploadImages from "./UploadImages";
import RecipeForm from "./RecipeForm";
// import { useTranslations } from "next-intl";

export interface RecipeData {
  title: string;
  introduction: string;
  category: string[];
  ingredients_list: string[];
  preparation_time: string;
  servings: string;
  instructions: string[];
  tips_and_variations: string;
  nutritional_information: string;
  storage_instructions: string;
  image: string[];
  id?: any;
}

export default function AddRecipe({ handleDropDown }: any) {
  // const t = useTranslations("Contact");

  const [allCategories, setAllCategories] = useState([]);
  const [recipeImageUrl, setRecipeImageUrl] = useState<string[]>([]);
  useEffect(() => {
    fetchAllCategories();
  }, []);
  const handleImageUpload = (urls: string[]) => {
    setRecipeImageUrl(urls);
  };

  console.log(recipeImageUrl);

  const fetchAllCategories = async () => {
    try {
      const categories = await getAllCategories();
      setAllCategories(categories);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const { user }: any = useUser();
  const handleSubmit = async (
    values: RecipeData,
    setErrors: (errors: FormikErrors<RecipeData>) => void,
    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    console.log(values);
    const {
      title,
      introduction,
      category,
      ingredients_list,
      preparation_time,
      servings,
      instructions,
      tips_and_variations,
      nutritional_information,
      storage_instructions,
    } = values;
    console.log(setErrors);

    try {
      const response = await fetch(`${process.env.BASE_URL}/api/save-recipe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          introduction,
          category: [category],
          ingredients_list,
          preparation_time,
          servings,
          instructions,
          tips_and_variations,
          nutritional_information,
          storage_instructions,
          sub: user.sub,
          image_url: recipeImageUrl,
        }),
      });
      console.log(response, "responseresponseresponse");

      if (!response.ok) {
        throw new Error("Failed to create recipe");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error, "rrrrrrrrrrrrr");
      // console.error("Error creating recipe:", error);
      return { success: false, error: error };
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col pl-12  overflow-y-scroll  bg-slate-200 w-[650px] h-screen text-black fixed top-0 right-0 z-[100]">
      <div
        onClick={handleDropDown}
        className="bg-[rgba(0,0,0,0.7)] flex items-center justify-center h-screen fixed top-0 w-screen right-0 z-[1000]"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative w-[900px]"
        >
          <div className="absolute inset-0 bg-[url('/images/recipes.jpg')] bg-cover bg-no-repeat bg-left blur-sm"></div>
          <div className="relative flex flex-col pl-12 overflow-y-scroll max-h-[600px] backdrop-blur-sm rounded-lg mb-6">
            <div
              onClick={() => handleDropDown()}
              className="text-white text-3xl relative "
            >
              <IoMdClose className="absolute right-6 top-4 cursor-pointer" />
            </div>

            <h1
              className={`font-bold text-4xl my-8 text-[#fff] ${oleo.className}`}
            >
              Share your Favourite Recipe
            </h1>
            <RecipeForm
              handleImageUpload={handleImageUpload}
              handleSubmit={handleSubmit}
              allCategories={allCategories}
            />

            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
