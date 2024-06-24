"use client";
import React from "react";
import { oleo } from "../../app/fonts";
import { IoMdClose } from "react-icons/io";

import { useUser } from "@auth0/nextjs-auth0/client";

import { FormikErrors } from "formik";

import RecipeForm from "./RecipeForm";
import { toast } from "react-toastify";

export interface RecipeData {
  title: string;
  introduction: string;
  category: string[];
  ingredients_list: string[] | string;
  preparation_time: string;
  servings: string;
  instructions: string[] | string;
  tips_and_variations: string;
  nutritional_information: string;
  storage_instructions: string;
  images: string[];
  id?: any;
}

export default function AddRecipe({ handleDropDown }: any) {
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
      images,
    } = values;
    console.log(setErrors);

    try {
      const response = await fetch(`${process.env.BASE_URL}/api/save-recipe`, {
        method: "POST",
        cache: "no-store",
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
          images,
        }),
      });
      console.log(response, "responseresponseresponse");

      if (!response.ok) {
        throw new Error("Failed to create recipe");
      }

      const data = await response.json();
      toast.success("recipe saved successfully!");
      handleDropDown();
      return data;
    } catch (error) {
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
              className={`font-bold text-4xl my-8 text-[#fff] text-center ${oleo.className}`}
            >
              Share your Favourite Recipe
            </h1>
            <RecipeForm handleSubmit={handleSubmit} />

            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
