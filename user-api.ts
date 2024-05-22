"use server"

import { setCartTotalCookie } from "./actions";

export interface User {
  id:number;
  age:number;
  name:string;
  email:string;
}


export async function getUsers(){
  
    const response = await fetch(`${process.env.BASE_URL}/api/get-users` );
    const {users} = await response.json()

    return users?.rows;
}

export async function createUser(name:string, email:string, age:number) {

    const response =  await fetch(`${process.env.BASE_URL}/api/create-users`, {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          age
        }),
      }); 

      const data = await response.json()

      return data;
}

export async function deleteUser (id:number) {

    const response =  await fetch(`${process.env.BASE_URL}/api/delete-users/${id}`, {
        method: "DELETE",
      }); 

      return response.json()
}

export async function editUser(id: number, userData: User) {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/edit-users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData),
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
      const data = await response.json();
      setCartTotalCookie(data.quantity)

      // cookieStore.set("cart", data.quantity)
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
    throw error;
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
};
