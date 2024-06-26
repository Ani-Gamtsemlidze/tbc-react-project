import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { userId, productId, rating } = await request.json();

  try {
    const existingRating = await sql`
      SELECT * FROM reviews 
      WHERE user_id = ${userId} AND product_id = ${productId}
    `;

    if (existingRating.rows.length > 0) {
      return NextResponse.json({ success: false, error: 'User has already rated this product' }, { status: 400 });
    }

    await sql`
      INSERT INTO reviews (user_id, product_id, rating) 
      VALUES (${userId}, ${productId}, ${rating})
    `;

    return NextResponse.json({ success: true, message: 'Rating added successfully' });
  } catch (error) {
    console.error('Error adding product rating:', error);
    return NextResponse.json({ success: false, error: 'Failed to add product rating' }, { status: 500 });
  }
}
