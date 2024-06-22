import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const filter1 = parseFloat(searchParams.get('filter1') || '0');
    const filter2 = parseFloat(searchParams.get('filter2') || '0');

    console.log(filter1, filter2, "FILTERS");

    const products = await sql `SELECT * FROM products
    WHERE price BETWEEN ${filter1} AND ${filter2}`;

    try {
        return NextResponse.json({ products }, { status: 200 });
    } catch (error) {
        console.error("Error fetching products:", error);
        return NextResponse.json({ error: error }, { status: 500 });
    }
}
