"use client";
import React from "react";
import { oleo } from "../../app/fonts";
import { IoMdClose } from "react-icons/io";

import * as Yup from "yup";
import { useUser } from "@auth0/nextjs-auth0/client";

import { Formik, FormikErrors, Form, Field, ErrorMessage } from "formik";
// import { useTranslations } from "next-intl";

export interface RecipeData {
  title: string;
  introduction: string;
  category: string;
  ingredients_list: string;
  preparation_time: string;
  servings: string;
  instructions: string;
  tips_and_variations: string;
  nutritional_information: string;
  storage_instructions: string;
  image: string;
}

export default function AddRecipe({ handleDropDown }: any) {
  // const t = useTranslations("Contact");
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
          image_url:
            "https://st3.depositphotos.com/13324256/17303/i/450/depositphotos_173034766-stock-photo-woman-writing-down-recipe.jpg",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create recipe");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error creating recipe:", error);
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

            <Formik
              initialValues={{
                title: "",
                introduction: "",
                category: "",
                ingredients_list: "",
                preparation_time: "",
                servings: "",
                instructions: "",
                tips_and_variations: "",
                nutritional_information: "",
                storage_instructions: "",
                image: "",
                user_id: "",
              }}
              validationSchema={Yup.object({
                title: Yup.string()
                  .min(3, "name must be et list 2 character")
                  .max(150, "name must be et maximum 150")
                  .required("required"),
                introduction: Yup.string()
                  .min(60)
                  .max(250)
                  .required("required"),
                ingredients_list: Yup.string().required("required"),
                preparation_time: Yup.string().required("required"),
                servings: Yup.string().required("required"),
              })}
              onSubmit={(values, { setSubmitting, setErrors }) => {
                alert("error");

                console.log("dddd");
                handleSubmit(values, setErrors, setSubmitting);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="w-[600px] mx-auto flex items-center justify-center flex-col px-16 py-4 my-4 bg-white shadow-lg rounded-lg">
                  <div className=" relative w-[500px] ">
                    <div className="border-b border-gray-900/10 pb-12">
                      {/* <p className="mt-1 text-md font-bold leading-6 text-[#035C41] w-96 text-center ">
                        This information will be displayed publicly so be
                        careful what you share.
                      </p> */}

                      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                          <label
                            htmlFor="RecipeTitle"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Recipe Title
                          </label>
                          <div className="mt-2">
                            <Field
                              type="text"
                              name="title"
                              id="RecipeTitle"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                          <ErrorMessage
                            name="title"
                            component="div"
                            className="text-red-500"
                          />
                        </div>
                        <div className="sm:col-span-3">
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Recipe Category
                          </label>

                          <div className="mt-2">
                            <Field
                              as="select"
                              id="category"
                              name="category"
                              autoComplete="category-name"
                              className="block w-full rounded-md border-0 py-2 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                              <option>Choose Category</option>
                              <option value="Dessert">Dessert</option>
                              <option value="Spicy">Spicy</option>
                            </Field>
                            <ErrorMessage
                              name="category"
                              component="div"
                              className="text-red-500"
                            />
                          </div>
                        </div>

                        <div className="col-span-full">
                          <label
                            htmlFor="introduction"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Brief Recipe Description:
                          </label>
                          <div className="mt-2">
                            <Field
                              id="about"
                              as="textarea"
                              name="introduction"
                              type="introduction"
                              rows={3}
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              // defaultValue={""}
                            />
                            <ErrorMessage
                              name="introduction"
                              component="div"
                              className="text-red-500"
                            />
                          </div>
                          <p className="mt-3 text-sm leading-6 text-gray-600">
                            Write a few sentences about Recipe.
                          </p>
                        </div>

                        <div className="col-span-full">
                          <label
                            htmlFor="street-address"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            List of Ingredients:
                          </label>
                          <div className="mt-2">
                            <Field
                              as="textarea"
                              name="ingredients_list"
                              id="street-address"
                              autoComplete="street-address"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                          <ErrorMessage
                            name="ingredients_list"
                            component="div"
                            className="text-red-500"
                          />
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="preparation_time"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Preparation Time (in minutes):
                          </label>
                          <div className="mt-2">
                            <Field
                              type="number"
                              name="preparation_time"
                              id="preparation_time"
                              autoComplete="family-name"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            <ErrorMessage
                              name="preparation_time"
                              component="div"
                              className="text-red-500"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="servings"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Servings (portion size):
                          </label>
                          <div className="mt-2">
                            <Field
                              type="number"
                              name="servings"
                              id="servings"
                              autoComplete="family-name"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            <ErrorMessage
                              name="servings"
                              component="div"
                              className="text-red-500"
                            />
                          </div>
                        </div>
                        <div className="col-span-full">
                          <label
                            htmlFor="tips_and_variations"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Tips and Variations (optional):
                          </label>
                          <div className="mt-2">
                            <Field
                              id="tips_and_variations"
                              as="textarea"
                              name="tips_and_variations"
                              //   type="introduction"
                              rows={3}
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              // defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-span-full">
                          <label
                            htmlFor="nutritional_information"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Nutritional Information (per serving):
                          </label>
                          <div className="mt-2">
                            <Field
                              id="nutritional_information"
                              as="textarea"
                              name="nutritional_information"
                              //   type="introduction"
                              rows={3}
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              // defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-span-full">
                          <label
                            htmlFor="storage_instructions"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Storage Instructions (if applicable):
                          </label>
                          <div className="mt-2">
                            <Field
                              id="storage_instructions"
                              as="textarea"
                              name="storage_instructions"
                              //   type="introduction"
                              rows={3}
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              // defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-span-full">
                          <label
                            htmlFor="photo"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Photo
                          </label>
                          <div className="mt-2 flex items-center gap-x-3">
                            {/* <UserCircleIcon
                    className="h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  /> */}
                            <button
                              type="button"
                              className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                              Change
                            </button>
                          </div>
                        </div>

                        <div className="col-span-full">
                          <label
                            htmlFor="cover-photo"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Cover photo
                          </label>
                          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                            <div className="text-center">
                              {/* <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    /> */}
                              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                <label
                                  htmlFor="file-upload"
                                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                >
                                  <span>Upload a file</span>
                                  <input
                                    id="file-upload"
                                    name="file-upload"
                                    type="file"
                                    className="sr-only"
                                  />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                              </div>
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
                    {/* <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Reset
            </button> */}
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="w-96 py-4 mt-6 text-lg  font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      {isSubmitting ? "loading" : "Save"}
                    </button>
                    {/* <button

                className="w-32 bg-black text-white py-4 my-4 rounded"
                type="submit"
              >
                Submit
              </button> */}
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
