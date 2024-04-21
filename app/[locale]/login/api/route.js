import { AUTH_COOKIE } from "@/constants";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const formData = await request.json();

    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: formData.username,
        password: formData.password,
      }),
    });

    const data = await response.json();
    console.log(data);

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
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      {
        status: 500,
      }
    );
  }
}

export async function GET() {
  const cookieStore = cookies();

  cookieStore.delete(AUTH_COOKIE);

  return new NextResponse("done");
}
