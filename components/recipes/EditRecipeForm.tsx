"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { editRecipeInfo, getRecipe } from "../../user-api";
import { RecipeData } from "./AddRecipe";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function EditRecipeForm({ recipeId }: { recipeId: number }) {
  const [editedRecipe, setEditedRecipe] = useState<RecipeData | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  console.log(recipeId);

  const { user } = useUser();

  useEffect(() => {
    fetchRecipe(recipeId);
  }, [recipeId]);

  const fetchRecipe = async (id: number) => {
    try {
      const singleRecipe = await getRecipe(id);
      if (singleRecipe && singleRecipe[0]) {
        setEditedRecipe(singleRecipe[0]);
      }
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editedRecipe) return;
    try {
      await editRecipeInfo(user?.sub as string, editedRecipe);
      setIsEditing(false);
      console.log("Recipe updated successfully");
    } catch (error) {
      console.error("Error editing recipe:", error);
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof RecipeData
  ) => {
    const value = e.target.value;
    if (editedRecipe) {
      if (
        field === "category" ||
        field === "ingredients_list" ||
        field === "instructions" ||
        field === "image"
      ) {
        setEditedRecipe({
          ...editedRecipe,
          [field]: value.split(",").map((item) => item.trim()),
        });
      } else {
        setEditedRecipe({ ...editedRecipe, [field]: value });
      }
    }
  };

  if (!editedRecipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="lg:m-10">
      <form
        onSubmit={handleSave}
        className="relative border ml-12 border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10"
      >
        <h1 className="mb-6 text-xl font-semibold lg:text-2xl">
          Edit Recipe: {editedRecipe.title}
        </h1>

        <div>
          <label> Title </label>
          <input
            type="text"
            placeholder="Recipe Title"
            value={editedRecipe.title}
            className={`mt-2 pl-4 h-12 w-full rounded-md bg-gray-100 px-31 ${
              !isEditing ? " text-gray-500" : "text-black"
            }`}
            onChange={(e) => handleInputChange(e, "title")}
            readOnly={!isEditing}
          />
        </div>

        <div>
          <label> Introduction </label>
          <textarea
            placeholder="Introduction"
            value={editedRecipe.introduction}
            className={`mt-2 pl-4 h-12 w-full rounded-md bg-gray-100 px-31 ${
              !isEditing ? " text-gray-500" : "text-black"
            }`}
            onChange={(e) => handleInputChange(e, "introduction")}
            readOnly={!isEditing}
          />
        </div>

        <div>
          <label> Category </label>
          <input
            type="text"
            placeholder="Category"
            value={editedRecipe.category.join(", ")}
            className={`mt-2 pl-4 h-12 w-full rounded-md bg-gray-100 px-31 ${
              !isEditing ? " text-gray-500" : "text-black"
            }`}
            onChange={(e) => handleInputChange(e, "category")}
            readOnly={!isEditing}
          />
        </div>

        <div>
          <label> Ingredients </label>
          <textarea
            placeholder="Ingredients"
            value={editedRecipe.ingredients_list?.join("\n")}
            className={`mt-2 pl-4 h-12 w-full rounded-md bg-gray-100 px-31 ${
              !isEditing ? " text-gray-500" : "text-black"
            }`}
            onChange={(e) => handleInputChange(e, "ingredients_list")}
            readOnly={!isEditing}
          />
        </div>

        <div>
          <label> Preparation Time </label>
          <input
            type="text"
            placeholder="Preparation Time"
            value={editedRecipe.preparation_time}
            className={`mt-2 pl-4 h-12 w-full rounded-md bg-gray-100 px-31 ${
              !isEditing ? " text-gray-500" : "text-black"
            }`}
            onChange={(e) => handleInputChange(e, "preparation_time")}
            readOnly={!isEditing}
          />
        </div>

        <div>
          <label> Servings </label>
          <input
            type="text"
            placeholder="Servings"
            value={editedRecipe.servings}
            className={`mt-2 pl-4 h-12 w-full rounded-md bg-gray-100 px-31 ${
              !isEditing ? " text-gray-500" : "text-black"
            }`}
            onChange={(e) => handleInputChange(e, "servings")}
            readOnly={!isEditing}
          />
        </div>

        <div>
          <label> Instructions </label>
          <textarea
            placeholder="Instructions"
            value={editedRecipe.instructions.join("\n")}
            className={`mt-2 pl-4 h-12 w-full rounded-md bg-gray-100 px-31 ${
              !isEditing ? " text-gray-500" : "text-black"
            }`}
            onChange={(e) => handleInputChange(e, "instructions")}
            readOnly={!isEditing}
          />
        </div>

        <div>
          <label> Tips and Variations </label>
          <textarea
            placeholder="Tips and Variations"
            value={editedRecipe.tips_and_variations}
            className={`mt-2 pl-4 h-12 w-full rounded-md bg-gray-100 px-31 ${
              !isEditing ? " text-gray-500" : "text-black"
            }`}
            onChange={(e) => handleInputChange(e, "tips_and_variations")}
            readOnly={!isEditing}
          />
        </div>

        <div>
          <label> Nutritional Information </label>
          <textarea
            placeholder="Nutritional Information"
            value={editedRecipe.nutritional_information}
            className={`mt-2 pl-4 h-12 w-full rounded-md bg-gray-100 px-31 ${
              !isEditing ? " text-gray-500" : "text-black"
            }`}
            onChange={(e) => handleInputChange(e, "nutritional_information")}
            readOnly={!isEditing}
          />
        </div>

        <div>
          <label> Images </label>
          <input
            type="text"
            placeholder="Image URL"
            value={(editedRecipe.image && editedRecipe.image.join(", ")) || ""}
            className={`mt-2 pl-4 h-12 w-full rounded-md bg-gray-100 px-31 ${
              !isEditing ? " text-gray-500" : "text-black"
            }`}
            onChange={(e) => handleInputChange(e, "image")}
            readOnly={!isEditing}
          />
        </div>

        <div>
          <button
            type="button"
            onClick={handleEditClick}
            className={`mt-5 w-full rounded-md p-2 ${
              isEditing ? "bg-slate-500" : "bg-blue-600"
            } text-center font-semibold text-white`}
          >
            Edit
          </button>
          <button
            type="submit"
            disabled={!isEditing}
            className={`mt-5 w-full rounded-md p-2 ${
              isEditing ? "bg-blue-600" : "bg-slate-500"
            } text-center font-semibold text-white`}
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
