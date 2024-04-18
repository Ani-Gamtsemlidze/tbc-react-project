"use server";

import { AUTH_COOKIE } from "@/constants";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function login(username, password) {
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  }); 

  const data = await response.json();

  const token = data.token;
  const cookieStore = cookies();

  if (response.ok) {
    cookieStore.set(AUTH_COOKIE, token);
  }
}

export async function logout() {
  const cookieStore = cookies();

  cookieStore.delete(AUTH_COOKIE);
  return redirect("/login")
}
