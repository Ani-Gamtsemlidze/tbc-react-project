import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { userId, productId, rating } = await request.json();
  console.log("USERID", userId)

  try {
    // Check if the cart item already exists
    // const existingCartItem = await sql`
    //   SELECT * FROM carts WHERE user_id = ${userId} AND product_id = ${productId}
    // `;


      await sql`
        INSERT INTO reviews (user_id, product_id, rating) 
        VALUES (${userId}, ${productId}, ${rating})
      `;

    return NextResponse.json({ success: true, message: 'Product added to cart' });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    return NextResponse.json({ success: false, error: 'Failed to add product to cart' }, { status: 500 });
  }
}


