import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { title, introduction, categoryJson, ingredientsListJson,preparation_time,servings,instructionsJson,  tips_and_variations, 
    nutritional_information, 
    storage_instructions,
    imageUrl}  = await request.json();
    
    try {
        // if (!name || !email || !age) {
        //     throw new Error('name, email, and age are required');
        // }
        
        await sql`
        INSERT INTO recipes (title, introduction, category, ingredients_list, preparation_time, servings, instructions, tips_and_variations, nutritional_information, storage_instructions, image_url)
        VALUES (
          ${title}, 
          ${introduction}, 
          ${categoryJson}, 
          ${ingredientsListJson}, 
          ${preparation_time}, 
          ${servings}, 
          ${instructionsJson}, 
          ${tips_and_variations}, 
          ${nutritional_information}, 
          ${storage_instructions}, 
          ${imageUrl}
        )
      `;
        
        
        const recipes = await sql`SELECT * FROM recipes`;
        const successMessage = 'Recipe created successfully';
        return NextResponse.json({ recipes, successMessage }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}