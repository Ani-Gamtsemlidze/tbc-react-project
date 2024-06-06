import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";


export const revalidate = 0;
export async function GET () {
    try {
        const recipes = await sql`SELECT * from recipes ;`
        console.log(recipes)
        return NextResponse.json({recipes}, {status:200})
    } catch(error) {

        
        return NextResponse.json({error}, {status : 500})
    }
}
