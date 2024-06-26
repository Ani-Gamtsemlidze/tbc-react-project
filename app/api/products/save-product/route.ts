import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const {
    title,
    description,
    categories,
    ingredients,
    price,
    nutrients,
    images,
    sub
  } = await request.json();

  const ingredientsArray = ingredients.split('\n').filter((ingredient: string) => ingredient.trim() !== '');
  const imagesArray = images.filter((imageUrl: string) => imageUrl.trim() !== '');


  try {
    await sql`
        INSERT INTO products ( title, description, categories,  ingredients, price,  nutrients, images, sub)
        VALUES (
          ${title}, 
          ${description}, 
          ${categories}, 
          ${ingredientsArray},  
          ${price}, 
          ${nutrients}, 
          ${imagesArray},
          ${sub}
        )
      `;

    const products = await sql`SELECT * FROM products`;
    const successMessage = "Products created successfully";
    return NextResponse.json({ products, successMessage }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

