import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormField from "../recipeForm/FormField";
import SelectField from "../recipeForm/SelectField";
import TextareaField from "../recipeForm/TextareaFild";
import NumberInputField from "../recipeForm/NumberInputField";
import UploadImages from "./UploadImages";
import { RecipeData } from "./AddRecipe";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getAllCategories } from "../../user-api";
import { toast } from "react-toastify";

interface Props {
  handleSubmit: (
    data: any,
    setErrors: any,
    setSubmitting: (d: boolean) => void
  ) => void;

  recipeData?: RecipeData;
}

const RecipeForm = ({ handleSubmit, recipeData }: Props) => {
  const [allCategories, setAllCategories] = useState<
    { label: string; value: string }[]
  >([]);
  const [recipeImageUrl, setRecipeImageUrl] = useState<string[]>(
    recipeData?.images || []
  );
  const fetchAllCategories = async () => {
    try {
      const categories = await getAllCategories();
      setAllCategories(categories);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchAllCategories();
  }, []);

  const handleImageUpload = (urls: string[]) => {
    setRecipeImageUrl((prev) => [...prev, ...urls]);
  };

  const handleDeleteImage = (url: string) => {
    setRecipeImageUrl((prev) => prev.filter((el) => el !== url));
  };

  return (
    <Formik
      initialValues={{
        title: recipeData?.title || "",
        introduction: recipeData?.introduction || "",
        category: recipeData?.category || [],
        ingredients_list: recipeData?.ingredients_list || [],
        preparation_time: recipeData?.preparation_time || "",
        servings: recipeData?.servings || "",
        instructions: recipeData?.instructions || [],
        tips_and_variations: recipeData?.tips_and_variations || "",
        nutritional_information: recipeData?.nutritional_information || "",
        storage_instructions: recipeData?.storage_instructions || "",
        image: recipeData?.images || [],
        user_id: "",
      }}
      validationSchema={Yup.object({
        title: Yup.string()
          .min(3, "name must be et list 2 character")
          .max(150, "name must be et maximum 150")
          .required("required"),
        introduction: Yup.string().min(60).max(250).required("required"),
        ingredients_list: Yup.string().required("required"),
        preparation_time: Yup.string().required("required"),
        servings: Yup.string().required("required"),
      })}
      onSubmit={(values, { setSubmitting, setErrors }) => {
        if (!recipeImageUrl.length) {
          toast.error("please upload iamge");
          console.log("dddd");
          setSubmitting(false);
          return;
        }
        handleSubmit(
          { ...values, images: recipeImageUrl },
          setErrors,
          setSubmitting
        );
      }}
    >
      {({ isSubmitting, errors }) => (
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
                  multiple
                  options={allCategories.map((item: any) => ({
                    value: item.name,
                    label: item.name,
                  }))}
                />

                <TextareaField
                  label="Brief Recipe Description"
                  name="introduction"
                  placeholder="Write a few sentences about Recipe."
                  rows={3}
                />

                <TextareaField
                  label="List of Ingredients"
                  name="ingredients_list"
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
                  label="Preparation Time (in minutes)"
                  name="preparation_time"
                  placeholder="Enter preparation time"
                />
                <NumberInputField
                  label="Servings (portion size):"
                  name="servings"
                  placeholder="Enter servings number"
                />

                <TextareaField
                  label="Tips and Variations (optional)"
                  placeholder="Tips and Variations"
                  name="tips_and_variations"
                  rows={3}
                />

                <TextareaField
                  label="Nutritional Information (per serving)"
                  name="nutritional_information"
                  placeholder="Nutritional Information"
                  rows={3}
                />

                <TextareaField
                  label="Storage Instructions (if applicable)"
                  name="storage_instructions"
                  placeholder="Storage Instructions"
                  rows={3}
                />

                <div className="col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Cover photos
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <UploadImages onImagesUpload={handleImageUpload} />
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                  {recipeImageUrl.length ? (
                    <div className=" flex flex-wrap gap-2 mt-4">
                      {recipeImageUrl.map((el) => {
                        return (
                          <div className=" relative " key={el}>
                            <div
                              className=" absolute top-1 right-1 p-2 w-4 h-4 rounded-full bg-red-500 flex items-center justify-center  text-slate-50  cursor-pointer "
                              onClick={() => handleDeleteImage(el)}
                            >
                              X
                            </div>
                            <Image
                              className=" rounded-md w-48 h-48 object-cover"
                              src={el}
                              width={300}
                              height={300}
                              alt="img"
                            />
                          </div>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-x-6">
            <button
              disabled={isSubmitting}
              onClick={() => {
                if (Object.keys(errors).length) {
                  toast.error("check require field");
                }
              }}
              type="submit"
              className="w-96 py-4 mt-6 text-lg  font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {isSubmitting ? "loading" : "Save"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RecipeForm;
