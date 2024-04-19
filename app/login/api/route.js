import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { AUTH_COOKIE } from "@/constants";
import { NextResponse } from "next/server";

export async function POST(request) {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");

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

  if (response.ok && username === formData.get("username")) {
    cookieStore.set(AUTH_COOKIE, token);
    return redirect("/");
  }
  return Response.json({ username, password });
}
