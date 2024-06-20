import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const {
    title,
    introduction,
    category,
    ingredients_list,
    preparation_time,
    // storage_instructions,
    servings,
    instructions,
    tips_and_variations,
    nutritional_information,
    images,
    sub,
  } = await request.json();

  console.log(images, "parseInt(preparation_time)");

  try {
    const ingredientsArray = ingredients_list
      ?.split("\n")
      .filter((ingredient: string) => ingredient.trim() !== "");
    const instructionsArray = instructions
      ?.split("\n")
      .filter((instruction: string) => instruction.trim() !== "");
    const imagesArray = images?.filter(
      (imageUrl: string) => imageUrl.trim() !== ""
    );

    await sql`
        INSERT INTO recipes ( title, introduction, category, ingredients_list, preparation_time, servings, instructions, tips_and_variations, nutritional_information, images, user_id)
        VALUES (
          ${title}, 
          ${introduction}, 
          ${category}, 
          ${ingredientsArray},  
          ${preparation_time}, 
          ${servings}, 
          ${instructionsArray}, 
          ${tips_and_variations}, 
          ${nutritional_information}, 
          ${imagesArray},
          ${sub}
        )
      `;

    const recipes = await sql`SELECT * FROM recipes`;
    const successMessage = "Recipe created successfully";
    return NextResponse.json({ recipes, successMessage }, { status: 200 });
  } catch (error) {
    console.log(error, "errrrr");
    return NextResponse.json({ error }, { status: 500 });
  }
}
