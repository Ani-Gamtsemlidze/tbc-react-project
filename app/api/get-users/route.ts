import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";


export const revalidate = 0;
export async function GET () {
    try {
        const users = await sql`SELECT * from users;`


        

        return NextResponse.json({users}, {status:200})
    } catch(error) {

        
        return NextResponse.json({error}, {status : 500})
    }
}