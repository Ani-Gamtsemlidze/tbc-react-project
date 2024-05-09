import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;
export async function PUT(request: NextRequest) {

  const id = request.nextUrl.pathname.replace("/api/edit-users/", " ");
  console.log(request, id)
  try {
    const { name, email, age } = await request.json();

    if (!name || !email || !age) {
      throw new Error("Name, email, or age is missing in the request body.");
    }

    await sql`UPDATE users SET name = ${name}, email = ${email}, age = ${age} WHERE id = ${Number(id)}`;

    const users = await sql`SELECT * FROM users`;

    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
