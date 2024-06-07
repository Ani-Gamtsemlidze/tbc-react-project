import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;
export async function PUT(request: NextRequest) {

  const id = request.nextUrl.pathname.replace("/api/edit-users/", " ");
  (id)
  try {
    const { email, given_name, family_name, nickname  } = await request.json();

    if ( !email || !given_name) {
      throw new Error("Name, email, or age is missing in the request body.");
    }

    await sql`UPDATE users SET firstname = ${given_name}, email = ${email}, lastname = ${family_name},
    nickname = ${nickname}
    WHERE user_id = ${id}}`;

    const users = await sql`SELECT * FROM users_info`;

    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
