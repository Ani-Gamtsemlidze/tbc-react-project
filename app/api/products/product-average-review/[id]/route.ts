import { sql } from "@vercel/postgres";

export async function GET(_request: Request, { params }: { params: { id: number } }) {
    try {
        console.log("Rating endpoint called with id:", params.id);

        if (!params.id) {
            return new Response("Product ID is required", { status: 400 });
        }

        const result = await sql`
            SELECT AVG(rating) AS average_rating 
            FROM reviews 
            WHERE product_id = ${params.id};
        `;

        console.log("Rating query result:", result);

        const averageRating = result.rows[0]?.average_rating || 0;

        return new Response(JSON.stringify({ averageRating }), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (error) {
        console.error("Error fetching average rating:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}
