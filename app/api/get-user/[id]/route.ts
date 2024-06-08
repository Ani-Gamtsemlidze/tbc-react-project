import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(_request: Request,  { params }: { params: { id: string } }) {
    const { id } = params;
    console.log("PARAMSID", id);
  try {
    const user = await sql`SELECT * FROM users_info WHERE user_id = ${id}`;
    console.log("user", user);

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error('Error fetching recipe:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}