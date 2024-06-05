import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
    const {
        title,
        introduction,
        category,
        ingredients_list,
        preparation_time,
        servings,
        instructions,
        tips_and_variations,
        nutritional_information,
        storage_instructions,
        image_url
    } = await request.json();

    console.log("Title:", title);

    try {
        // Data Validation
        if (!title || !introduction || !category || !ingredients_list || !preparation_time || !servings || !instructions || !image_url) {
            throw new Error('All fields are required');
        }

        // Insert into database
        await sql`
            INSERT INTO recipes (
                title, 
                introduction, 
                category, 
                ingredients_list, 
                preparation_time, 
                servings, 
                instructions, 
                tips_and_variations, 
                nutritional_information, 
                storage_instructions, 
                image_url
            ) VALUES (
                ${title}, 
                ${introduction}, 
                ${category}, 
                ${ingredients_list}, 
                ${preparation_time}, 
                ${servings}, 
                ${instructions}, 
                ${tips_and_variations}, 
                ${nutritional_information}, 
                ${storage_instructions}, 
                ${image_url}
            )
        `;

        // Return success response with the newly added recipe
        const successMessage = 'Recipe created successfully';
        return new Response(JSON.stringify({ success: true, message: successMessage }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        // Return error response
        const errorMessage = error || 'Internal server error';
        return new Response(JSON.stringify({ success: false, error: errorMessage }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}
