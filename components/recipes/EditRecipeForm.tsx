"use client";

import { useState, useEffect } from "react";
import { editRecipeInfo, getRecipe } from "../../user-api";
import { RecipeData } from "./AddRecipe";
import { useUser } from "@auth0/nextjs-auth0/client";
import RecipeForm from "./RecipeForm";

export default function EditRecipeForm({ recipeId }: { recipeId: number }) {
  const [editedRecipe, setEditedRecipe] = useState<RecipeData | null>(null);
  // const [isEditing, setIsEditing] = useState<boolean>(false);
  // const [recipeImageUrl, setRecipeImageUrl] = useState<string[]>([]);

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

  const handleSave = async (data: any) => {
    console.log(data, "data");
    // e.preventDefault();
    if (!editedRecipe) return;
    try {
      await editRecipeInfo(user?.sub as string, {
        ...data,
        id: editedRecipe.id,
      });
      // setIsEditing(false);
      console.log("Recipe updated successfully");
    } catch (error) {
      console.error("Error editing recipe:", error);
    }
  };

  if (!editedRecipe) {
    return <div>Loading...</div>;
  }
  const handleImageUpload = (urls: string[]) => {
    console.log(urls);
    // setRecipeImageUrl(urls);
  };

  return (
    <div className="lg:m-10">
      <RecipeForm
        handleSubmit={(data: any) => {
          handleSave(data);
          console.log("dada");
        }}
        handleImageUpload={handleImageUpload}
        allCategories={[{ value: "1", label: "1" }]}
        recipeData={editedRecipe}
      />
    </div>
  );
}
