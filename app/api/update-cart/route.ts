import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    console.log(body);

    await sql`UPDATE carts SET quantity = ${body.quantity} WHERE product_id = ${body.product_id}`;

    if (body.quantity === 0) {
      await sql`DELETE FROM carts WHERE product_id = ${body.product_id}`;
    }

    const updatedData: any = await sql`SELECT * FROM carts WHERE product_id = ${body.product_id}`;

    return NextResponse.json(
      {
        msg: "Product quantity changed!",
        updatedData: updatedData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating product quantity:", error);
    return NextResponse.json(
      { msg: "Error updating product quantity" },
      { status: 500 }
    );
  }
}


export async function DELETE (request: Request) {
  const body = await request.json()
  try {
    await sql`DELETE FROM carts
    WHERE user_id = ${body.user_id};
    `;
    return NextResponse.json(
      { msg: "Product is deleted!" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "Error!" }, { status: 400 });
  }
}