
"use server"
import { cookies } from "next/headers";
import {  User, addToCart, createUser, deleteUser, editUser, getUsers } from "./user-api";

export async function createUserAction(formData: FormData) {
    try {
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const age = formData.get("age") as string;

        await createUser(name, email, Number(age));

        const users = await getUsers();

        return { success: true, users };
    } catch (error) {
        console.error("Error creating user:", error);
        return { success: false, error };
    }
}

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

  export const setCartTotalCookie = async (quantity: number) => {
    const cookieStore = cookies();
    cookieStore.set("cart_total", quantity.toString());
  };
