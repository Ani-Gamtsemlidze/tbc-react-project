import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { name, email, age } = await request.json();
    
    try {
        if (!name || !email || !age) {
            throw new Error('name, email, and age are required');
        }
        
        await sql`INSERT INTO users (name, email, age) VALUES (${name}, ${email}, ${age})`;
        
        console.log(name, email, age);
        
        const users = await sql`SELECT * FROM users`;
        const successMessage = 'User created successfully';
        return NextResponse.json({ users, successMessage }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
