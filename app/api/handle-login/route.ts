// import { getSession } from "@auth0/nextjs-auth0";
// import { sql } from "@vercel/postgres";
// import { redirect } from "next/navigation";

// export async function GET(_request: Request) {
//   try {
//     const session = await getSession();


//     if (user) {
//       const {email, sub, picture} = session.user
//       const existingUser = await sql`SELECT * FROM users_info WHERE user_id = ${sub};`;

//       if(!existingUser.rows.length)
//       await sql`
//       INSERT INTO users_info (user_id, email, picture)
//       VALUES (${sub}, ${email}, ${picture} );
//     `;

//     } else {
//       return redirect("/api/auth/login")
//     } 
//   }
//     catch (error) {
//       return redirect("/api/auth/logout")
//     }
//     return redirect("/")


//     }

  
import { getSession } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

export async function GET(_request:Request) {
  try {
    const { user }: any = await getSession();

    if (user) {
      const { email, sub, picture,given_name, family_name, nickname } =user;
      console.log(user, "session.user");
      const existingUser = await sql`SELECT * FROM users_info_ WHERE user_id = ${sub};`;

      if (!existingUser.rows.length)
        await sql`
      INSERT INTO users_info (user_id, email, picture, firstname, lastname, nickname)
      VALUES (${sub}, ${email}, ${picture}, ${given_name}, ${family_name}, ${nickname} );
    `;
    } else {
      return redirect(`${process.env.BASE_URL}/api/auth/login`);
    }
  } catch (error) {
    console.log(error, "error");
    return redirect(`${process.env.BASE_URL}/api/auth/logout`);
  }
  return redirect(`${process.env.BASE_URL}`);
}