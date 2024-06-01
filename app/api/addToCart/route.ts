import {  getSession } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";
import {  NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const session = await getSession()
  const body = await request.json()
  
  const user = session?.user;
  const userId = user?.sub;
  
  console.log(userId, "user")
    try {
      console.log("body", request)
      const data = await sql`SELECT * FROM carts WHERE product_id = ${body.product_id} AND user_id = ${userId};`;
  
      if (data.rows.length > 0) {
        await sql`UPDATE carts SET quantity = quantity + 1 WHERE product_id = ${body.product_id} AND user_id = ${userId};`;
  
        const quantity = await sql`SELECT SUM(quantity) AS total_quantity 
        FROM carts 
        WHERE user_id = ${userId}`;

  
        return NextResponse.json(
          {
            msg: "update product successfully",
            quantity: quantity.rows[0].total_quantity,
          },
          { status: 200 }
        );
      }
  
      await sql`INSERT INTO carts (user_id, product_id, quantity, added_on)
          VALUES (${userId}, ${
        body.product_id
      }, ${1}, CURRENT_TIMESTAMP);`;
  
      const quantity = await sql`SELECT SUM(quantity) AS total_quantity 
        FROM carts 
        WHERE user_id = ${userId}`;
  
      return NextResponse.json(
        {
          msg: "Product is added successfully!",
          quantity: quantity.rows[0].total_quantity,
        },
        { status: 201 }
      );
    } catch (error) {
      console.error("Failed to add product:", error);
      return new Response("Failed to add product", {
        status: 400,
      });
    }
  };


  