import { cookies } from "next/headers";
import {  NextResponse } from "next/server";
import { AUTH_COOKIE } from "../../../../constants";

export async function POST(request:Request) {
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

    if (response.ok) {
      cookies().set(AUTH_COOKIE, data.token);
      return NextResponse.json({ token: data.token });
    } else if (data.message) {
      return NextResponse.json(
        { error: data.message },
        {
          status: 404,
        }
      );
    }
    return;
  }

export async function GET() {
  const cookieStore = cookies();
  cookieStore.delete(AUTH_COOKIE);
  return new NextResponse("done");
}
