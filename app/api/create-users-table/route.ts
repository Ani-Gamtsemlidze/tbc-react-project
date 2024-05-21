import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
// export async function GET() {
//   try {
//     const result =
//       await sql`CREATE TABLE users ( id SERIAL, name varchar(255) NOT NULL, email varchar(255) UNIQUE NOT NULL, age integer );`;
//     return NextResponse.json({ result }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }
// }

export async function GET() {
  try {
    const result = await sql`
      ALTER TABLE users
      ADD PRIMARY KEY (id);
    `;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}