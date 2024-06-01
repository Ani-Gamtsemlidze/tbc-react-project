import { getSession } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(_request: Request) {
  try {
    const {user}:any = await getSession();

    console.log(user)

    if (!user.sub) {
      throw new Error("sub, email, picture are required");
    }

    const existingUser = await sql`SELECT * FROM users_info WHERE sub = ${user.sub};`;

    if (existingUser && existingUser.rows.length > 0) {
      return NextResponse.json(
        { error: "sub already exists" },
        { status: 400 }
      );
    } else {
      await sql`
      INSERT INTO users_info (sub, email, picture, email_verified, family_name,given_name,nickname, sid)
      VALUES (${user.sub}, ${user.email}, ${user.picture}, ${user.email_verified}, ${user.family_name}, ${user.given_name}, ${user.nickname}, ${user.sid} );
    `;
    }

    const singleUser =
    await sql`SELECT picture FROM users_info WHERE sub = ${user.sub};`;
    
    return NextResponse.json({ singleUser }, { status: 200 });
  } catch (error: any) {
    console.error("Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
  