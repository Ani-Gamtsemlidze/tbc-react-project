import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(_request: Request, { params }: { params: { id: number } }) {

  try {
    const recipe = await sql`SELECT * FROM recipes WHERE id = ${params.id}`;
    // console.log("recipe", recipe);

    return NextResponse.json({ recipe }, { status: 200 });
  } catch (error) {
    console.error('Error fetching recipe:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
