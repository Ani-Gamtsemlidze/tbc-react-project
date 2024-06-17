"use server"

import { revalidatePath } from "next/cache";
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
    const response = await fetch(url, {
      cache: "no-store", 
    });
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
export async function getUserRecipes(userId: string) {
  console.log("USERID", userId)
  try {
    const url = `${process.env.BASE_URL}/api/get-user-recipe/${userId}`;
    const response = await fetch(url, {
      cache: "no-store", 
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("USERRECIPEDATA", data)
    return data.recipes.rows;
  } catch (error) {
    console.error('Error fetching recipe:', error);
    throw error;
  }
}


export async function getUser(id: string) {
  try {
    const url = `${process.env.BASE_URL}/api/get-user/${id}`; 
    const response = await fetch(url, {
      cache: "no-store", 
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.user.rows;
  } catch (error) {
    console.error('Error fetching user:', error);
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
export async function getProductsCategory(category: string) {  
  console.log(category, "ISCATEGORYARRAY")
  try {
    const url = `${process.env.BASE_URL}/api/get-products-category/${category}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching category data:', error);
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


// export async function getRecipes(){
  
//     const response = await fetch(`${process.env.BASE_URL}/api/get-recipes` );
//     const {recipes} = await response.json()
    
//     // console.log(recipes, "recipes vrecipes recipes ")
   
//     return recipes;
// }

export async function getRecipes(){
  
  const response = await fetch(`${process.env.BASE_URL}/api/get-recipes` );
  const {recipes} = await response.json()
 
  return recipes?.rows;
}




export async function getOrderProducts(id: string){
  const response = await fetch(`${process.env.BASE_URL}/api/get-order-products/${id}`, {
    cache: "no-store",  
    method: "GET",
  });
    const {products}= await response.json()
  return products?.rows;
}

export async function getProduct(id: number) {
  try {
    const url = `${process.env.BASE_URL}/api/get-product/${id}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.product.rows;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
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
export async function getProductsCategories() {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/get-products-categories`);
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    const productsCategories = data?.productsCategories;


    return productsCategories?.rows;
  } catch (error) {
    console.error("Failed to fetch product categories:", error);
    return [];
  }
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


export async function editUserInfo(id: string, editUser:any) {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/update-user-info/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editUser),
    });

    if (!response.ok) {
      throw new Error("Failed to edit user");
    }

    return response.json();
  } catch (error) {
    console.error("Error updating user:", error);
    throw error; 
  }
}
export async function editRecipeInfo(id: string, editRecipe:any) {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/update-user-recipe/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editRecipe),
    });

    if (!response.ok) {
      throw new Error("Failed to edit user");
    }

    return response.json();
  } catch (error) {
    console.error("Error updating user:", error);
    throw error; 
  }
}
export async function editProductInfo(id: string, editedProduct: any) {
  console.log(id, "EDITEDPRODUCT");
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/update-product-info/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedProduct),
    });

    if (!response.ok) {
      throw new Error("Failed to edit product");
    }

    return response.json();
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
}


export async function addToOrder(userId: string, products: any) {
  console.log(products)
  const response = await fetch(`${process.env.BASE_URL}/api/addToOrder`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId, products }),
  });

  const data = await response.json();
  if (data.success) {
    console.log('Product added to order');
  } else {
    console.error('Failed to add product to order:', data.error);
  }
}


export async function getCarts(user_id: string) {
  console.log("CARTS", user_id )
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


export async function updateCart(userId: string,productId: number, quantity: number) {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/update-cart`, {
      cache: "no-store",  
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({user_id: userId,product_id: productId, quantity })
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



export const deleteProducts = async (userId: string) => {
  await fetch(`${process.env.BASE_URL}/api/update-cart`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ user_id: userId })
  });
};

export const deleteUserRecipe = async (productId: number, userId: string) => {
  console.log(productId)
  await fetch(`${process.env.BASE_URL}/api/update-user-recipe/${userId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: productId })
  });
};
export const deleteProductAdmin = async (productId: number, userId: string) => {
  console.log(productId, userId, "DELETEPRODUCT")
  await fetch(`${process.env.BASE_URL}/api/update-product-info/${userId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: productId })
  });
};

export const deleteCartItem = async (userId: string, productId: number, ) => {
  console.log(productId)
  await fetch(`${process.env.BASE_URL}/api/get-cart/${userId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: productId })
  });
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


