import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";


export const revalidate = 0;
export async function GET () {
    try {
        const categories = await sql`SELECT * from categories ;`
        return NextResponse.json({categories}, {status:200})
    } catch(error) {

        
        return NextResponse.json({error}, {status : 500})
    }
}