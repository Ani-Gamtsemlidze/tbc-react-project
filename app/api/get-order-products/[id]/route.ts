import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET (_request: Request, { params }: { params: { id: string } }) {

      try {
          const products = await sql`SELECT * from orders WHERE user_id = ${params.id};`
          console.log(params.id, "orderedproducts")
          return NextResponse.json({products}, {status:200})
      } catch(error) {
  
          
          return NextResponse.json({error}, {status : 500})
      }
  }
  