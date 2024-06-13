import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const  revalidate = 0;

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  console.log(id, "SUB")
  try {
    const recipes = await sql`
      SELECT * FROM recipes
      WHERE user_id = ${id}
    `;

    return NextResponse.json({ recipes }, { status: 200 });
  } catch (error) {
    console.log(error, "errrr");
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
