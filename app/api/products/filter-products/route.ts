import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(_response:NextResponse) {
    // const {filter1, filter2} = await response.json()
    try {        
        const products = await sql`SELECT *
        FROM products
        WHERE price BETWEEN 5 AND 20;`;
        return NextResponse.json({ products }, { status: 200 });
    } catch (error) {
        console.error("Error fetching products:", error);
        return NextResponse.json({ error }, { status: 500 });
    }
}
