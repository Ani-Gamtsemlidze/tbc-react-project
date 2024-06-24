import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(_request: Request, { params }: { params: { id: number } }) {

  try {
    const product = await sql`SELECT * FROM products WHERE id = ${params.id}`;

    return NextResponse.json({ product }, { status: 200 });
  } catch (error) {
    console.error('Error fetching recipe:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
