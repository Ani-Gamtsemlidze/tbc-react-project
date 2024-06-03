import React, { useState, ChangeEvent, FormEvent } from "react";
// import { createRecipeAction } from "../../actions";

interface FormField {
  label: string;
  name: keyof RecipeData;
  type: string;
}

const formFields: FormField[] = [
  { label: "Recipe Title:", name: "title", type: "text" },
  { label: "Recipe Category:", name: "category", type: "text" },
  { label: "Brief Recipe Description:", name: "introduction", type: "text" },
  { label: "List of Ingredients:", name: "ingredients_list", type: "text" },
  {
    label: "Preparation Time (in minutes):",
    name: "preparation_time",
    type: "text",
  },
  { label: "Servings (portion size):", name: "servings", type: "text" },
  { label: "Step-by-Step Instructions:", name: "instructions", type: "text" },
  {
    label: "Tips and Variations (optional):",
    name: "tips_and_variations",
    type: "text",
  },
  {
    label: "Nutritional Information (per serving):",
    name: "nutritional_information",
    type: "text",
  },
  {
    label: "Storage Instructions (if applicable):",
    name: "storage_instructions",
    type: "text",
  },
  {
    label: "Upload Image:",
    name: "image",
    type: "file",
  },
];

interface RecipeData {
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

export default function AddRecipe() {
  //   const [recipesList, setRecipesList] = useState([]);
  const [formData, setFormData] = useState<RecipeData>({
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
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDataObj = new FormData();

    // Append each field from formData to formDataObj
    Object.entries(formData).forEach(([key, value]) => {
      formDataObj.append(key, value);
    });

    // try {
    // //   const { success, recipes } = await createRecipeAction(formDataObj);
    //   if (success) {
    //     // setRecipesList(recipes);
    //     alert("Recipe created successfully.");
    //     setFormData({
    //       title: "",
    //       introduction: "",
    //       category: "",
    //       ingredients_list: "",
    //       preparation_time: "",
    //       servings: "",
    //       instructions: "",
    //       tips_and_variations: "",
    //       nutritional_information: "",
    //       storage_instructions: "",
    //       image: "",
    //     });
    //   } else {
    //     console.error("Failed to add recipe");
    //     alert("Failed to add recipe. Please try again later.");
    //   }
    // } catch (error) {
    //   console.error("Error adding recipe:", error);
    //   alert(
    //     "An error occurred while adding the recipe. Please try again later."
    //   );
    // }
  };

  return (
    <form
      className="flex flex-col pl-12  overflow-y-scroll bg-gray-400 w-[650px] h-screen text-black fixed top-0 right-0 z-[100]"
      onSubmit={handleSubmit}
    >
      {formFields.map((field) => (
        <div
          key={field.label}
          className="flex justify-between items-center my-2 mr-12 "
        >
          <label className="text-white  flex float-start" key={field.name}>
            {field.label}
          </label>
          <input
            className="w-52 h-20 py-4 pl-2 outline-none flex items-start"
            placeholder={field.name}
            type={field.type}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
          />
        </div>
      ))}
      <br />
      <button
        className="w-32 bg-black text-white py-4 my-4 rounded"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
