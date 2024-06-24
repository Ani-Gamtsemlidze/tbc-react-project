import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET() {
  try {
    const productCategories = await sql`SELECT * from product_categories;`
    return NextResponse.json({ productsCategories: productCategories }, { status: 200 });
  } catch (error) {
    console.error("Error fetching product categories:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
