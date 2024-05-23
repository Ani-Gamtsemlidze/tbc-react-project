import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export const revalidate = 0;

export async function GET(_: any, { params }: { params: { userId: number } }) {

    try {
        const { userId } = params;
        
        const carts = await sql`SELECT * FROM carts WHERE user_id = ${Number(userId)}`
        
        return NextResponse.json({carts }, { status: 200 });
    } catch (error) {
        console.error("Error fetching carts:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}   