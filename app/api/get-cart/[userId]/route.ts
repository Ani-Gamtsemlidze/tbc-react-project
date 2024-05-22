import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";


export const revalidate = 0;
export async function GET ({params}: any) {

    const {userId} = params;

    console.log(userId)
    try {
        const carts = await sql`SELECT * from carts where user_id = ${Number(userId)};`

        return NextResponse.json({carts}, {status:200})
    } catch(error) {

        
        return NextResponse.json({error}, {status : 500})
    }
}