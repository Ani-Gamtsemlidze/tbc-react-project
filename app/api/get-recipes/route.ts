import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
export const  revalidate = 0;

export async function GET () {
    try {
        const recipes = await sql`SELECT * from recipes;`
        console.log(recipes)
        return NextResponse.json({recipes}, {status:200})
    } catch(error) {

        
        return NextResponse.json({error}, {status : 500})
    }
}
// export async function GET () {
//     try {
//         const recipes = await sql`SELECT * from recipes__ ;` as any
//             const categoriesPromises = recipes.rows.map(async (recipe : any) => {
//                 const categoryId = recipe.categoryid;
//                 const categories = await sql`SELECT * FROM categories WHERE id = ${categoryId};`;
//                 return {...recipe, category:categories.rows[0].name  }
//             });
            
//             const categories = await Promise.all(categoriesPromises);

//         console.log(categories, "categoriescategoriescategories");

//         return NextResponse.json({recipes:categories}, {status:200})
//     } catch(error) {

        
//         return NextResponse.json({error}, {status : 500})
//     }
// }
