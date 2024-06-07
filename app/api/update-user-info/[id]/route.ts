import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function PUT(request: NextRequest) {
  // Extracting the id from the URL
  const id = request.nextUrl.pathname.split("/").pop();

  try {
    const { email, firstname, lastname, nickname } = await request.json();

    if (!email || !lastname) {
      throw new Error("Name or email is missing in the request body.");
    }

    // Update user info in the database
 await sql`
      UPDATE users_info 
      SET firstname = ${firstname}, 
          email = ${email}, 
          lastname = ${lastname},
          nickname = ${nickname}
      WHERE user_id = ${id}
    `;

    // Retrieve the updated user information
    const user = await sql`SELECT * FROM users_info WHERE user_id = ${id}`;

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

