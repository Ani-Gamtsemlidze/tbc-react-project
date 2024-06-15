"use client";
import React, { useEffect, useState } from "react";
import { oleo } from "../../app/fonts";
import { IoMdClose } from "react-icons/io";

import * as Yup from "yup";
import { useUser } from "@auth0/nextjs-auth0/client";

import { Formik, FormikErrors, Form } from "formik";
import { getProductsCategories } from "../../user-api";
// import UploadRecipeImage from "./UploadRecipeImage";
import FormField from "../recipeForm/FormField";
import SelectField from "../recipeForm/SelectField";
import NumberInputField from "../recipeForm/NumberInputField";
import TextareaField from "../recipeForm/TextareaFild";
// import { useTranslations } from "next-intl";

export interface RecipeData {
  title: string;
  description: string;
  category: string[];
  ingredients: string[];
  price: string;
  tips_and_variations: string;
  nutrients: string;
  image: string[];
}

export default function AddProduct({ handleDropDown }: any) {
  // const t = useTranslations("Contact");

  const [allCategories, setAllCategories] = useState([]);
  //   const [recipeImageUrl, setRecipeImageUrl] = useState<string | null>("");

  useEffect(() => {
    fetchProductsCategories();
  }, []);
  //   const handleImageUpload = (url: string) => {
  //     setRecipeImageUrl(url);
  //   };
  //   console.log(recipeImageUrl);

  const fetchProductsCategories = async () => {
    try {
      const categories = await getProductsCategories();
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
      description,
      category,
      ingredients,
      price,

      tips_and_variations,
      nutrients,
    } = values;
    // event.preventDefault();
    console.log(setErrors);

    try {
      const response = await fetch(`${process.env.BASE_URL}/api/save-recipe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          category: [category],
          ingredients,
          price,
          tips_and_variations,
          nutrients,
          sub: user.sub,
          //   image_url: recipeImageUrl,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create recipe");
      }

      const data = await response.json();
      return data;
    } catch (error) {
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
              Upload Product
            </h1>

            <Formik
              initialValues={{
                title: "",
                description: "",
                category: [],
                ingredients: [],
                price: "",
                servings: "",
                instructions: [],
                tips_and_variations: "",
                nutrients: "",
                storage_instructions: "",
                image: [],
                user_id: "",
              }}
              validationSchema={Yup.object({
                title: Yup.string()
                  .min(3, "name must be et list 2 character")
                  .max(150, "name must be et maximum 150")
                  .required("required"),
                description: Yup.string().min(60).max(250).required("required"),
                ingredients: Yup.string().required("required"),
                price: Yup.string().required("required"),
                servings: Yup.string().required("required"),
              })}
              onSubmit={(values, { setSubmitting, setErrors }) => {
                // alert("error");

                // console.log("dddd");
                handleSubmit(values, setErrors, setSubmitting);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="w-[600px] mx-auto flex items-center justify-center flex-col px-16 py-4 my-4 bg-white shadow-lg rounded-lg">
                  <div className=" relative w-[500px] ">
                    <div className="border-b border-gray-900/10 pb-12">
                      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                          <FormField
                            label="Recipe Title"
                            name="title"
                            type="text"
                            placeholder="Enter recipe title"
                          />
                        </div>
                        <SelectField
                          label="Recipe Category"
                          name="category"
                          options={allCategories.map((item: any) => ({
                            value: item.name,
                            label: item.name,
                          }))}
                        />

                        <TextareaField
                          label="Brief Recipe Description"
                          name="description"
                          placeholder="Write a few sentences about Recipe."
                          rows={3}
                        />

                        <TextareaField
                          label="List of Ingredients"
                          name="ingredients"
                          placeholder="Enter ingredients, each on a new line"
                          rows={4}
                        />

                        <TextareaField
                          label="Instructions"
                          name="instructions"
                          placeholder="Enter instructions, each on a new line"
                          rows={4}
                        />

                        <NumberInputField
                          label="price"
                          name="price"
                          placeholder="Enter price"
                        />

                        <TextareaField
                          label="Nutritional Information (per serving)"
                          name="nutrients"
                          placeholder="Nutritional Information"
                          rows={3}
                        />

                        <div className="col-span-full">
                          <label
                            htmlFor="cover-photo"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Cover photo
                          </label>
                          {/* <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                            <div className="text-center">
                              <UploadRecipeImage
                                onImageUpload={handleImageUpload}
                              />
                              <p className="text-xs leading-5 text-gray-600">
                                PNG, JPG, GIF up to 10MB
                              </p>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-center gap-x-6">
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="w-96 py-4 mt-6 text-lg  font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      {isSubmitting ? "loading" : "Save"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
