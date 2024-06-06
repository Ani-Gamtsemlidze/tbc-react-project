import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  { params }: { params: { sub: string } }
) {
  const sub = params?.sub;
  try {
    const recipes = await sql`
      SELECT * FROM recipes_
      WHERE sub = ${sub}
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