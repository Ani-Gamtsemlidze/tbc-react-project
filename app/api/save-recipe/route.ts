import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const {
    title,
    introduction,
    category,
    ingredientsListJson,
    preparation_time,
    servings,
    instructionsJson,
    tips_and_variations,
    nutritional_information,
    storage_instructions,
    image_url,
  } = await request.json();
  console.log("MYSUb", JSON.stringify([category]))

//   const categoryArray = JSON.stringify(category);
//   console.log("Parsed category array:", categoryArray);
//   console.log("CATEGORYJSON",categoryArray, category )
//   const ingredientsListJson = JSON.stringify(ingredients_list);


  try {
    await sql`
        INSERT INTO recipes_ ( title, introduction, category, ingredients_list, preparation_time, servings, instructions, tips_and_variations, nutritional_information, storage_instructions, images)
        VALUES (
          ${title}, 
          ${introduction}, 
          ${JSON.stringify(category)}
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


      console.log(category, "CATEGORY")
    // const recipes = await sql`SELECT * FROM recipes`;
    const successMessage = "Recipe created successfully";
    return NextResponse.json({  successMessage }, { status: 200 });
  } catch (error) {
    console.log(error, "errrrr");
    return NextResponse.json({ error }, { status: 500 });
  }
}
