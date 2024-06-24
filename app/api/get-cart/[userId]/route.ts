import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export const revalidate = 0;

export async function GET(_request: Request,{ params }: { params: { userId: string } }) {
    try {
        const { userId } = params;
        const carts = await sql`SELECT * FROM carts WHERE user_id = ${userId}`

        
        return NextResponse.json({carts }, { status: 200 });
    } catch (error) {
        console.error("Error fetching carts:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}   


export async function DELETE (request: NextRequest, { params }: { params: { userId: string } }) {
    // const userId = request.nextUrl.pathname.split("/").pop();
    try {
  
      const {    
        id
      } = await request.json();
      await sql`
      DELETE FROM carts
      WHERE user_id = ${params.userId}  AND product_id = ${id} ;
    `;
    return NextResponse.json({ message: "cart item deleted successfully" }, { status: 200 });
    } catch (error) {
    console.error("Error deleting cart item:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
  }