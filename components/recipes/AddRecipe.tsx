"use client";
import React, { useState, ChangeEvent } from "react";
import { oleo } from "../../app/fonts";
import { IoMdClose } from "react-icons/io";

interface FormField {
  label: string;
  name: keyof RecipeData;
  type: string;
}

interface AddRecipeProps {
  handleAddRecipe: () => void;
  isAddRecipe: boolean;
}

const formFields: FormField[] = [
  { label: "Recipe Title:", name: "title", type: "text" },
  { label: "Recipe Category:", name: "category", type: "text" },
  { label: "Brief Recipe Description:", name: "introduction", type: "text" },
  { label: "List of Ingredients:", name: "ingredients", type: "text" },
  {
    label: "Preparation Time (in minutes):",
    name: "preparationTime",
    type: "text",
  },
  { label: "Servings (portion size):", name: "servings", type: "text" },
  { label: "Step-by-Step Instructions:", name: "instructions", type: "text" },
  {
    label: "Tips and Variations (optional):",
    name: "tipsAndVariations",
    type: "text",
  },
  {
    label: "Nutritional Information (per serving):",
    name: "nutritionalInformation",
    type: "text",
  },
  {
    label: "Storage Instructions (if applicable):",
    name: "storageInstructions",
    type: "text",
  },
];

export interface RecipeData {
  title: string;
  introduction: string;
  category: string;
  ingredients: string;
  preparationTime: string;
  servings: string;
  instructions: string;
  tipsAndVariations: string;
  nutritionalInformation: string;
  storageInstructions: string;
  images: string[];
}

const AddRecipe: React.FC<AddRecipeProps> = ({ handleAddRecipe }) => {
  const [formData, setFormData] = useState<Partial<RecipeData>>({
    title: "",
    introduction: "",
    category: "",
    ingredients: "",
    preparationTime: "",
    servings: "",
    instructions: "",
    tipsAndVariations: "",
    nutritionalInformation: "",
    storageInstructions: "",
    images: [], // Initialize images as an empty array
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name as keyof RecipeData]: value });
  };

  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   try {
  //     const formDataToSend: RecipeData = {
  //       title: formData.title || "",
  //       introduction: formData.introduction || "",
  //       category: formData.category || "",
  //       ingredients: formData.ingredients || "",
  //       preparationTime: formData.preparationTime || "",
  //       servings: formData.servings || "",
  //       instructions: formData.instructions || "",
  //       tipsAndVariations: formData.tipsAndVariations || "",
  //       nutritionalInformation: formData.nutritionalInformation || "",
  //       storageInstructions: formData.storageInstructions || "",
  //       images: formData.images || [],
  //     };

  //     const result = await createRecipe(formDataToSend);
  //     console.log(result); // Handle success
  //   } catch (error) {
  //     console.error("Error:", error); // Handle error
  //   }
  // };

  return (
    <div
      onClick={handleAddRecipe}
      className="bg-[rgba(0,0,0,0.7)] flex items-center justify-center h-screen fixed top-0 w-screen right-0 z-[1000]"
    >
      <div onClick={(e) => e.stopPropagation()} className="relative w-[900px]">
        <div className="absolute inset-0 bg-[url('/images/recipes.jpg')] bg-cover bg-no-repeat bg-left blur-sm"></div>
        <div className="relative flex flex-col pl-12 overflow-y-scroll max-h-[600px] backdrop-blur-sm rounded-lg">
          <div
            onClick={() => handleAddRecipe()}
            className="text-white text-3xl relative "
          >
            <IoMdClose className="absolute right-6 top-4 cursor-pointer" />
          </div>
          <h1
            className={`font-bold text-4xl my-8 text-[#fff] ${oleo.className}`}
          >
            Share your Favourite Recipe
          </h1>

          <form
            // onSubmit={handleSubmit}
            className="w-[600px] mx-auto px-16 py-4 my-4 bg-white shadow-lg rounded-lg"
          >
            {formFields.map((field) => (
              <div key={field.name} className="mb-6">
                <label
                  className="block text-lg font-semibold text-gray-700 mb-2"
                  htmlFor={field.name}
                >
                  {field.label}
                </label>
                <input
                  id={field.name}
                  className="w-full p-4 border placeholder:text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder={field.label}
                  type={field.type}
                  name={field.name}
                  value={formData[field.name] as string}
                  onChange={handleChange}
                />
              </div>
            ))}
            <button
              type="submit"
              className="w-96 py-4 mt-6 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;

// {formFields.map((field) => (
//   <div
//     key={field.label}
//     className="flex justify-between items-center my-8 mr-12 "
//   >
//     <label
//       className="font-bold  flex float-start text-[#035C41]"
//       key={field.name}
//     >
//       {field.label}
//     </label>
//     <input
//       className="w-52 h-14 py-4 pl-2 outline-none flex items-start text-[#035C41]"
//       placeholder={field.name}
//       type={field.type}
//       name={field.name}
//       value={formData[field.name]}
//       onChange={handleChange}
//     />
//   </div>
// ))}
