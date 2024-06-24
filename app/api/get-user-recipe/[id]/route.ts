import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const  revalidate = 0;
export const dynamic = 'force-dynamic'


export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const recipes = await sql`
      SELECT * FROM recipes
      WHERE user_id = ${id}
    `;

    return NextResponse.json({ recipes }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
