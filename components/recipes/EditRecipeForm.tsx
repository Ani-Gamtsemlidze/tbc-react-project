"use client";

import { useState, useEffect } from "react";
import { editRecipeInfo, getRecipe } from "../../user-api";
import { RecipeData } from "./AddRecipe";
import { useUser } from "@auth0/nextjs-auth0/client";
import RecipeForm from "./RecipeForm";
import { toast } from "react-toastify";

export default function EditRecipeForm({
  recipeId,
  closeForm,
}: {
  recipeId: number;
  closeForm: () => void;
}) {
  const [editedRecipe, setEditedRecipe] = useState<RecipeData | null>(null);
  // const [isEditing, setIsEditing] = useState<boolean>(false);

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

  const handleSave = async (
    data: any,
    errors: any,
    setSumiting: (d: boolean) => void
  ) => {
    console.log(errors, "errorserrorserrors");
    // e.preventDefault();
    if (!editedRecipe) return;
    try {
      await editRecipeInfo(user?.sub as string, {
        ...data,
        id: editedRecipe.id,
      });
      // setIsEditing(false);
      console.log("Recipe updated successfully");
      setSumiting(false);
      toast.success("edited successfully!");
      closeForm();
    } catch (error) {
      console.error("Error editing recipe:", error);
      setSumiting(false);
    } finally {
      setSumiting(false);
    }
  };

  if (!editedRecipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="lg:m-10">
      <RecipeForm
        handleSubmit={handleSave}
        recipeData={{
          ...editedRecipe,
          ingredients_list: Array.isArray(editedRecipe?.ingredients_list)
            ? editedRecipe?.ingredients_list?.join("\n")
            : editedRecipe?.ingredients_list,
          instructions: Array.isArray(editedRecipe?.instructions)
            ? editedRecipe?.instructions?.join("\n")
            : editedRecipe?.instructions,
        }}
      />
    </div>
  );
}
