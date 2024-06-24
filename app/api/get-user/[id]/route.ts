import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;
export const dynamic = 'force-dynamic'


export async function GET(_request: Request,  { params }: { params: { id: string } }) {
    const { id } = params;
  try {
    const user = await sql`SELECT * FROM users_info WHERE user_id = ${id}`;

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error('Error fetching recipe:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
