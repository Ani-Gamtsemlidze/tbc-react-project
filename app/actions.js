
import { AUTH_COOKIE_TOKEN } from "@/constants";
import { cookies } from "next/headers";
export async function login(username, password) {
  "use server";

  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const token = response.token
  const cookieStore = cookies()

  cookieStore.set(AUTH_COOKIE_TOKEN, token )
}
