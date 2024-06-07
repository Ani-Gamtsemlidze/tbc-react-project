import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(_request: Request, { params }: { params: { id: string } }) {
    const categoryName = decodeURIComponent(params.id)
    try {
        const result = await sql`
            SELECT * FROM products
            WHERE categories @> ${`["${categoryName}"]`};`;

        const rows = result.rows;
        console.log("ROWSS", rows) // aq modis

        return NextResponse.json({ rows }, { status: 200 });
    } catch(error) {
        console.error('Error fetching recipes:', error);
        return NextResponse.json({ error }, { status: 500 });
    }
}