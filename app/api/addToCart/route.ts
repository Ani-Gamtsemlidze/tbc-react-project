import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { userId, productId, quantity } = await request.json();
  console.log("USERID", userId)

  try {
    // Check if the cart item already exists
    const existingCartItem = await sql`
      SELECT * FROM carts_ WHERE user_id = ${userId} AND product_id = ${productId}
    `;

    if (existingCartItem.rowCount > 0) {
      // Update quantity if the cart item already exists
      await sql`
        UPDATE carts_ SET quantity = quantity + ${quantity} 
        WHERE user_id_ = ${userId} AND product_id = ${productId}
      `;
    } else {
      // Insert a new cart item if it doesn't exist
      await sql`
        INSERT INTO carts_ (user_id, product_id, quantity) 
        VALUES (${userId}, ${productId}, ${quantity})
      `;
    }

    return NextResponse.json({ success: true, message: 'Product added to cart' });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    return NextResponse.json({ success: false, error: 'Failed to add product to cart' }, { status: 500 });
  }
}

