import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";


export const revalidate = 0;
export async function GET () {
    try {
        const products = await sql`SELECT * from products;`
        return NextResponse.json({products}, {status:200})
    } catch(error) {

        
        return NextResponse.json({error}, {status : 500})
    }
}
