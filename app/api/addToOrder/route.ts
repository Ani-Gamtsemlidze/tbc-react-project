import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export const revalidate = 0;


export async function POST(request: Request) {
  const { userId, products } = await request.json();
  console.log("USERID", userId)

  try {

      await sql`
        INSERT INTO orders (user_id, products) 
        VALUES (${userId}, ${products})
      `;

    return NextResponse.json({ success: true, message: 'Product added to orders' });
  } catch (error) {
    console.error('Error adding product to orders:', error);
    return NextResponse.json({ success: false, error: 'Failed to add product to orders' }, { status: 500 });
  }
}

