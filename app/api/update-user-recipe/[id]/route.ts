import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function PUT(request: NextRequest) {
  // Extracting the id from the URL
  const userId = request.nextUrl.pathname.split("/").pop();

  const test = await request.json();

  try {
    const {
      id,
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
      image_url,
    } = test;
    console.log(test, ":ddddddddddddddddddddddddddd");

    const ingredientsArray = ingredients_list
      .split("\n")
      ?.filter((ingredient: string) => ingredient.trim() !== "");
    const instructionsArray = instructions
      .split("\n")
      ?.filter((instruction: string) => instruction.trim() !== "");
    const imagesArray = image_url?.filter(
      (imageUrl: string) => imageUrl.trim() !== ""
    );

    if (!title || !userId) {
      throw new Error("Name or email is missing in the request body.");
    }

    await sql`
    UPDATE recipes 
    SET 
      title = ${title}, 
      introduction = ${introduction}, 
      category = ${category}, 
      ingredients_list = ${ingredientsArray}, 
      preparation_time = ${preparation_time}, 
      servings = ${servings}, 
      instructions = ${instructionsArray}, 
      tips_and_variations = ${tips_and_variations}, 
      nutritional_information = ${nutritional_information}, 
      images = ${imagesArray} 
    WHERE user_id = ${userId} AND id = ${id}
  `;

    const recipe =
      await sql`SELECT * FROM recipes WHERE user_id = ${userId}  AND id = ${id}`;
    console.log(recipe, "adad");
    return NextResponse.json({ recipe }, { status: 200 });
  } catch (error) {
    console.log(error, "error---error");
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const userId = request.nextUrl.pathname.split("/").pop();
  console.log(userId);
  try {
    const { id } = await request.json();
    console.log("userId", userId, id);
    await sql`
    DELETE FROM recipes
    WHERE user_id = ${userId}  AND id = ${id} ;
  `;
    return NextResponse.json(
      { message: "Recipe deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting recipe:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
