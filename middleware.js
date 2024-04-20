import { NextResponse } from "next/server";
import { AUTH_COOKIE } from "./constants";

export async function middleware(request) {
  let cookie = request.cookies.get(AUTH_COOKIE);
  console.log(cookie);

  //   if (!cookie?.value) {
  //   return NextResponse.redirect(new URL("/", request.url));

  //   }

  // return NextResponse.redirect(new URL("/login", request.url));
}

// export const config = {
//   matcher: ["/", "/blog", "/products", "/contact", "/profile"],
// };
