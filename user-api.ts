"use server"

import { cookies } from "next/headers";

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
  const cookieStore = cookies()
  try {
      const response = await fetch(`${process.env.BASE_URL}/api/addToCart`, {
        method: "POST",
        body: JSON.stringify({ product_id: productId }),
      });
      const data = await response.json();

      cookieStore.set("cart", data.quantity)
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
}
