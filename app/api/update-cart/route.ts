import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();

    if (body.quantity < 0) {
      return NextResponse.json(
        { msg: "Quantity cannot be negative" },
        { status: 400 }
      );
    }

    await sql`
      UPDATE carts 
      SET quantity = ${body.quantity} 
      WHERE user_id = ${body.user_id} AND product_id = ${body.product_id} 
    `;

   if (body.quantity === 0) {
      await sql`
        DELETE FROM carts 
        WHERE user_id = ${body.user_id} AND product_id = ${body.product_id}
      `;
    }

    const updatedData = await sql`
      SELECT * FROM carts 
      WHERE user_id = ${body.user_id} AND product_id = ${body.product_id} 
      ORDER BY id ASC
    `;

    return NextResponse.json(
      {
        msg: "Product quantity changed!",
        updatedData: updatedData.rows,
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

export async function DELETE(request: Request) {
  const body = await request.json();
  try {
    await sql`
      DELETE FROM carts
      WHERE user_id = ${body.user_id};
    `;
    return NextResponse.json(
      { msg: "All products for the user are deleted!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ msg: "Error!" }, { status: 400 });
  }
}