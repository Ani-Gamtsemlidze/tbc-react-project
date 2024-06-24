import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { userId, productId, quantity } = await request.json();

  try {
    const existingCartItem = await sql`
      SELECT * FROM carts WHERE user_id = ${userId} AND product_id = ${productId}
    `;

    if (existingCartItem.rowCount > 0) {
      await sql`
        UPDATE carts SET quantity = quantity + ${quantity} 
        WHERE user_id = ${userId} AND product_id = ${productId}
      `;
    } else {
      await sql`
        INSERT INTO carts (user_id, product_id, quantity) 
        VALUES (${userId}, ${productId}, ${quantity})
      `;
    }

    return NextResponse.json({ success: true, message: 'Product added to cart' });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    return NextResponse.json({ success: false, error: 'Failed to add product to cart' }, { status: 500 });
  }
}

