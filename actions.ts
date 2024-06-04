
"use server"
// import { cookies } from "next/headers";
import {  User, addToCart, deleteUser, editUser } from "./user-api";

// export async function createRecipeAction(formData: FormData) {
//   try {
//       const title = formData.get("title") as string;
//       const introduction = formData.get("introduction") as string;
//       const category = formData.get("category") as string;
//       const ingredients_list = formData.get("ingredients_list") as string;
//       const preparation_time = formData.get("preparation_time") as string;
//       const servings = formData.get("servings") as string;
//       const instructions = formData.get("instructions") as string;
//       const tips_and_variations = formData.get("tips_and_variations") as string;
//       const nutritional_information = formData.get("nutritional_information") as string;
//       const storage_instructions = formData.get("storage_instructions") as string;
//       const image_url = formData.get("image_url") as string;

//       const response = await createRecipe(
//           title,
//           introduction,
//           category,
//           ingredients_list,
//           preparation_time,
//           servings,
//           instructions,
//           tips_and_variations,
//           nutritional_information,
//           storage_instructions,
//           image_url
//       );

//       if (response.success) {
//           const recipes = await getRecipes();
//           return { success: true, recipes };
//       } else {
//           return { success: false, error: response.error };
//       }
//   } catch (error) {
//       console.error("Error creating recipe:", error);
//       return { success: false, error };
//   }
// }

// export async function createRecipeAction(formData: FormData) {
//     try {
//         const title = formData.get("title") as string;
//         const introduction = formData.get("introduction") as string;
//         const category = formData.get("category") as string;
//         const ingredients_list = formData.get("ingredients_list") as string;
//         const preparation_time = formData.get("preparation_time") as string;
//         const servings = formData.get("servings") as string;
//         const instructions = formData.get("instructions") as string;
//         const tips_and_variations = formData.get("tips_and_variations") as string;
//         const nutritional_information = formData.get("nutritional_information") as string;
//         const storage_instructions = formData.get("storage_instructions") as string;
//         const imageFile = formData.get("image") as File;

//         let image_url = "";

//         if (imageFile) {
//             const imageData = new FormData();
//             imageData.append("file", imageFile);
            
//             const imageUploadResponse = await fetch(`${process.env.BASE_URL}/api/upload-image`, {
//                 method: "POST",
//                 body: imageData,
//             });

//             if (!imageUploadResponse.ok) {
//                 throw new Error("Failed to upload image");
//             }

//             const imageUploadData = await imageUploadResponse.json();
//             image_url = imageUploadData.url; 
//         }

//         const response = await createRecipe(
//             title,
//             introduction,
//             JSON.parse(category), 
//             JSON.parse(ingredients_list), 
//             preparation_time,
//             servings,
//             JSON.parse(instructions), 
//             tips_and_variations,
//             nutritional_information,
//             storage_instructions,
//             image_url
//         );

//         if (response.success) {
//             const recipes = await getRecipes();
//             return { success: true, recipes };
//         } else {
//             throw new Error(response.error);
//         }
//     } catch (error) {
//         console.error("Error creating recipe:", error);
//         return { success: false, error: error };
//     }
// }




export async function deleteUserAction (id:number) {
    await deleteUser(id);
}

export async function editUsersAction(id: number, userData: User) {
    try {
   await editUser(id, userData);

    } catch (error) {
        console.error("Error editing user:", error);
        throw error; 
    }
}

export async function addToCartAction(productId: number) {
    try {
      await addToCart(productId);
    } catch (error) {
      console.error("Error adding to cart:", error);
      throw error;
    }
  }
