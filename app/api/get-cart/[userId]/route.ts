import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export const revalidate = 0;

export async function GET(_request: Request,{ params }: { params: { userId: string } }) {
    try {
        const { userId } = params;
        console.log("params", userId)
        const carts = await sql`SELECT * FROM carts WHERE user_id = ${userId}`

        console.log("CARTS", carts)
        
        return NextResponse.json({carts }, { status: 200 });
    } catch (error) {
        console.error("Error fetching carts:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}   