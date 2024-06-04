import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;
export async function PUT(request: Request) {
  try {
    const { sub, picture } = await request.json();
    const users =
      await sql`UPDATE users_info SET picture = ${picture} WHERE user_id = ${sub}`;
    const response = users.rows;
    return NextResponse.json({ response }, { status: 200 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
