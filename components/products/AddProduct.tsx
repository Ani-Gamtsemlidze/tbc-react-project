"use client";
import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import * as Yup from "yup";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Formik, Form } from "formik";
import { getProductsCategories } from "../../user-api";
import FormField from "../recipeForm/FormField";
import SelectField from "../recipeForm/SelectField";
import NumberInputField from "../recipeForm/NumberInputField";
import TextareaField from "../recipeForm/TextareaFild";
import { oleo } from "../../app/fonts";
import UploadImages from "../recipes/UploadImages";

export interface ProductData {
  title: string;
  description: string;
  categories: string[];
  ingredients: string[];
  price: string;
  nutrients: string;
  images: string[];
}

export default function AddRecipe({ handleDropDown }: any) {
  const [allCategories, setAllCategories] = useState([]);
  const [recipeImages, setRecipeImages] = useState<string[]>([]);

  useEffect(() => {
    fetchAllCategories();
  }, []);

  const fetchAllCategories = async () => {
    try {
      const categories = await getProductsCategories();
      setAllCategories(categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const { user }: any = useUser();

  const handleSubmit = async (
    values: ProductData,
    {
      setErrors,
      setSubmitting,
    }: { setErrors: Function; setSubmitting: Function }
  ) => {
    const { title, description, categories, ingredients, price, nutrients } =
      values;

    try {
      const response = await fetch(`${process.env.BASE_URL}/api/save-product`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          categories: [categories],
          ingredients,
          price,
          nutrients,
          sub: user.sub,
          images: recipeImages, // Pass the uploaded image URLs here
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create recipe");
      }

      const data = await response.json();
      console.log("Recipe saved successfully:", data);
      // Optionally handle success, e.g., redirect user or show a success message
    } catch (error) {
      console.error("Error creating recipe:", error);
      setErrors({ submit: "Failed to save recipe. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  const handleImageUpload = (urls: string[]) => {
    setRecipeImages(urls); // Update recipeImages state with uploaded image URLs
  };

  return (
    <div className="flex flex-col pl-12 overflow-y-scroll bg-slate-200 w-[650px] h-screen text-black fixed top-0 right-0 z-[100]">
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

            <Formik
              initialValues={{
                title: "",
                description: "",
                categories: [],
                ingredients: [],
                price: "",
                nutrients: "",
                images: [],
              }}
              validationSchema={Yup.object({
                title: Yup.string()
                  .min(2, "Title must be at least 2 characters")
                  .max(150, "Title must be at most 150 characters")
                  .required("Required"),
                description: Yup.string()
                  .min(10, "Description must be at least 10 characters")
                  .max(250, "Description must be at most 250 characters")
                  .required("Required"),
                categories: Yup.string()
                  .min(1, "Please select at least one category")
                  .required("Required"),
                ingredients: Yup.string()
                  .min(1, "Please enter at least one ingredient")
                  .required("Required"),
                price: Yup.string().required("Required"),
                nutrients: Yup.string().required("Required"),
              })}
              onSubmit={(values, { setSubmitting, setErrors }) => {
                handleSubmit(values, { setErrors, setSubmitting });
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
                          name="categories"
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

                        <NumberInputField
                          label="Price"
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
                          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                            <div className="text-center">
                              <UploadImages
                                onImagesUpload={handleImageUpload}
                              />
                              <p className="text-xs leading-5 text-gray-600">
                                PNG, JPG, GIF up to 10MB
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-center gap-x-6">
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="w-96 py-4 mt-6 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      {isSubmitting ? "Saving..." : "Save"}
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
