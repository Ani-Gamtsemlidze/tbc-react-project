import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function PUT(request: NextRequest) {
  try {
    const {
      id,
      title,
      description,
      categories,
      ingredients,
      price,
      nutrients,
      images,
    } = await request.json();

    // Extract userId from the request URL
    const userId = request.nextUrl.pathname.split("/").pop();

    // Split ingredients into array and filter out empty lines
    // const ingredientsArray = ingredients.split('\n').filter((ingredient: string) => ingredient.trim() !== '');

    // // Filter out empty image URLs
    // const imagesArray = images.filter((imageUrl: string) => imageUrl.trim() !== '');

    // Validate required fields
    if (!id || !title || !userId) {
      throw new Error("ID, title, or user ID is missing in the request body.");
    }

    // Update the product in the database
    await sql`
      UPDATE products 
      SET 
        title = ${title}, 
        description = ${description}, 
        categories = ${categories}, 
        ingredients = ${ingredients}, 
        price = ${price}, 
        nutrients = ${nutrients}, 
        images = ${images}
      WHERE 
        sub = ${userId} AND id = ${id}
    `;

    // Fetch the updated product to return in the response
    const product = await sql`SELECT * FROM products WHERE sub = ${userId} AND id = ${id}`;

    // Return the updated product in the response
    return NextResponse.json({ product }, { status: 200 });
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json({ error: "Failed to update product." }, { status: 500 });
  }
}


// export async function DELETE (request: NextRequest) {
//   const userId = request.nextUrl.pathname.split("/").pop();
//   console.log(userId)
//   try {

//     const {    
//       id
//     } = await request.json();
//     console.log("userId", userId, id)
//     await sql`
//     DELETE FROM recipes
//     WHERE user_id = ${userId}  AND id = ${id} ;
//   `;
//   return NextResponse.json({ message: "Recipe deleted successfully" }, { status: 200 });
//   } catch (error) {
//   console.error("Error deleting recipe:", error);
//   return NextResponse.json({ error: "Internal server error" }, { status: 500 });
// }
// }