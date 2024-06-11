import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const {
    title,
    introduction,
    categoryJson,
    ingredientsListJson,
    preparation_time,
    servings,
    instructionsJson,
    tips_and_variations,
    nutritional_information,
    storage_instructions,
    image_url,
  } = await request.json();

  try {
    // const categoryArray = Array.isArray(category) ? category : [category];
    // const categoryJson = JSON.stringify(category);

    await sql`
        INSERT INTO recipes_ ( title, introduction, category, ingredients_list, preparation_time, servings, instructions, tips_and_variations, nutritional_information, storage_instructions, images)
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
          ${image_url}
        )
      `;

    const recipes = await sql`SELECT * FROM recipes_`;
    const successMessage = "Recipe created successfully";
    return NextResponse.json({ recipes, successMessage }, { status: 200 });
  } catch (error) {
    console.log(error, "errrrr");
    return NextResponse.json({ error }, { status: 500 });
  }
}
