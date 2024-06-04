import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;
export async function PUT(request: NextRequest) {

  const id = request.nextUrl.pathname.replace("/api/update-user-info/", " ");
  console.log("IDDD", id)
  try {
    const {  email } = await request.json();
    console.log(email)

    if ( !email ) {
      throw new Error("Name, email, or age is missing in the request body.");
    }

    await sql`UPDATE users_info SET email = ${email} WHERE user_id = ${id}}`;

    const users = await sql`SELECT * FROM users_info`;
    console.log("USERSSS", users)

    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
