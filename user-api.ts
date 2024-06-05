"use server"

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
// import { RecipeData } from "./components/recipes/AddRecipe";

export interface User {
  id:number;
  age:number;
  name:string;
  email:string;
}


export async function getUsers(){
  
    const response = await fetch(`${process.env.BASE_URL}/api/get-users` );
    const data = await response.json()

    return data.users?.rows;
}

export async function getRecipe(id: number) {
  try {
    const url = `${process.env.BASE_URL}/api/get-single-recipe/${id}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.recipe.rows;
  } catch (error) {
    console.error('Error fetching recipe:', error);
    throw error;
  }
}
export async function getCategory(categoryName: string) {  
  try {
    const url = `${process.env.BASE_URL}/api/get-category/${categoryName}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
}

// export async function addToBookmarks(userId: number, recipeId: number) {
//   try {
//       const url = `${process.env.BASE_URL}/api/save-recipe`;
//       const response = await fetch(url, {
//           method: 'POST',
//           body: JSON.stringify({ userId, recipeId }),
//           headers: {
//               'Content-Type': 'application/json'
//           }
//       });
//       if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const data = await response.json();
//       return data;
//   } catch (error) {
//       console.error('Error adding recipe to bookmarks:', error);
//       throw error;
//   }
// }


export async function getRecipes(){
  
    const response = await fetch(`${process.env.BASE_URL}/api/get-recipes` );
    const {recipes} = await response.json()

   
    return recipes?.rows;
}
export async function getCategories(){
  
    const response = await fetch(`${process.env.BASE_URL}/api/get-categories` );
    const {categories} = await response.json()

    return categories?.rows;
}
export async function getAllCategories(){
  
    const response = await fetch(`${process.env.BASE_URL}/api/get-all-categories` );
    const {categories} = await response.json()

    return categories?.rows;
}

// export async function createRecipe(recipeData: RecipeData) {
//   try {

//     const formData = new FormData();

//     Object.entries(recipeData).forEach(([key, value]) => {
//       if (key === "image" && value instanceof File) {
//         formData.append(key, value);
//       } else {
//         formData.append(key, value.toString());
//       }
//     });

//     const response = await fetch(`${process.env.BASE_URL}/api/save-recipe`, {
//       method: "POST",
//       body: formData,
//     });

//     if (!response.ok) {
//       throw new Error("Failed to create recipe");
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error creating recipe:", error);
//     return { success: false, error: error };
//   }
// }



export async function deleteUser (id:number) {

    const response =  await fetch(`${process.env.BASE_URL}/api/delete-users/${id}`, {
        method: "DELETE",
      }); 

      return response.json()
}



// export async function editUser(id: number, userData: User) {
//   try {
//     const response = await fetch(`${process.env.BASE_URL}/api/edit-users/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(userData),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to update user");
//     }

//     return response.json();
//   } catch (error) {
//     console.error("Error updating user:", error);
//     throw error; 
//   }
// }


export async function editUserInfo(id: number, email: any) {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/update-user-info/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(email),
    });

    if (!response.ok) {
      throw new Error("Failed to update user");
    }

    return response.json();
  } catch (error) {
    console.error("Error updating user:", error);
    throw error; 
  }
}

export async function addToCart (productId: number) {
  try {
      const response = await fetch(`${process.env.BASE_URL}/api/addToCart`, {
        
        method: "POST",
        body: JSON.stringify({ product_id: productId }),
      });
      if (response.ok) {
        // const data = await response.json();
        // setCartTotalCookie(data.quantity);
      } else {
        console.error("Error adding product to cart. Status:", response.status);
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
}


export async function getCarts(user_id: number) {
  try {

    const response = await fetch(`${process.env.BASE_URL}/api/get-cart/${user_id}`, {
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch carts: ${response.status} - ${response.statusText}`);
    }
    
    const carts = await response.json();
    return carts.carts.rows;
  } catch (error) {
    console.error("Error fetching carts:", error);
    return [];
  }
}


export async function updateCart(productId: number, quantity: number, change: string) {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/update-cart`, {
      cache: "no-store",  
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ product_id: productId, quantity, change })
    });

    if (!response.ok) {
      throw new Error(`Failed to update cart: ${response.status} - ${response.statusText}`);
    }

    const updatedData = await response.json(); 
    return updatedData;
  } catch (error) {
    console.error("Error updating cart:", error);
    throw error;
  }
}



export const deleteProducts = async (userId: number) => {
  await fetch(`${process.env.BASE_URL}/api/update-cart`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ user_id: userId })
  });
  cookies().delete("cart_total")
};

  
export async function getPicture(sub: string) {
  const response = await fetch(`${process.env.BASE_URL}/api/get-picture`, {
    method: "POST",
    body: JSON.stringify({ sub }),
  });
  const data = await response.json();
  return data.response;

}

export async function changePictureAction(sub: string, picture: string) {
  await fetch(`${process.env.BASE_URL}/api/change-picture`, {
    method: "PUT",
    body: JSON.stringify({ sub, picture }),
  });
  revalidatePath("/Profile");
}
