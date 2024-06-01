// import { sql } from '@vercel/postgres';
// import { NextResponse } from 'next/server';
 
// // export async function GET() {
// //   try {
// //     const result =
// //       await sql`CREATE TABLE users ( id SERIAL, name varchar(255) NOT NULL, email varchar(255) UNIQUE NOT NULL, age integer );`;
// //     return NextResponse.json({ result }, { status: 200 });
// //   } catch (error) {
// //     return NextResponse.json({ error }, { status: 500 });
// //   }
// // }

// export async function GET() {
//   try {
//     const result = await sql`
//       ALTER TABLE users
//       ADD PRIMARY KEY (id);
//     `;
//     return NextResponse.json({ result }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }
// }

// CREATE TABLE recipes (
//     id SERIAL PRIMARY KEY,
//     title VARCHAR(255) NOT NULL,
//     introduction TEXT,
//     category VARCHAR(100),
//     ingredients_list TEXT NOT NULL,
//     preparation_time VARCHAR(50),
//     servings VARCHAR(50),
//     instructions TEXT NOT NULL,
//     tips_and_variations TEXT,
//     nutritional_information TEXT,
//     storage_instructions TEXT,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );


// CREATE TABLE ingredients (
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(255) NOT NULL
// );


// CREATE TABLE recipe_ingredients (
//     recipe_id INT REFERENCES recipes(id),
//     ingredient_id INT REFERENCES ingredients(id),
//     quantity VARCHAR(100),
//     PRIMARY KEY (recipe_id, ingredient_id)
// );

// CREATE TABLE User_Cart (
//     CartID SERIAL PRIMARY KEY,
//     UserID INTEGER REFERENCES Users(id),
//     IngredientID INTEGER REFERENCES Ingredients(id),
//     Quantity INTEGER
// );


// CREATE TABLE recipes (
//     id SERIAL PRIMARY KEY,
//     title VARCHAR(255) NOT NULL,
//     introduction TEXT,
//     category VARCHAR(100),
//     preparation_time VARCHAR(50),
//     servings VARCHAR(50),
//     instructions JSONB,
//     tips_and_variations TEXT,
//     nutritional_information JSONB,
//     storage_instructions TEXT,
//     ingredients JSONB 
// );