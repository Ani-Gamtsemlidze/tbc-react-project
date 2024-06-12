import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(_request: Request, { params }: { params: { id: string } }) {
    try {
        const result = await sql`
        SELECT * FROM recipes
        WHERE ${params.id} = ANY(category);`;

        const rows = result.rows;

        return NextResponse.json({ rows }, { status: 200 });
    } catch(error) {
        console.error('Error fetching recipes:', error);
        return NextResponse.json({ error }, { status: 500 });
    }
}
