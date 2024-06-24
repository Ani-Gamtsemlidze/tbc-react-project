import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(_request: Request, { params }: { params: { id: string } }) {
    const categoryName = decodeURIComponent(params.id);
    
    try {
        const result = await sql`
            SELECT * FROM products
            WHERE categories @> ARRAY[${categoryName}]::text[];`;

        const rows = result.rows;

        return NextResponse.json({ rows }, { status: 200 });
    } catch(error) {
        console.error('Error fetching products:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
