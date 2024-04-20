import { NextResponse } from "next/server";
import { AUTH_COOKIE } from "./constants";
import { cookies } from "next/headers";

export function middleware(request) {
  const token = cookies().get(AUTH_COOKIE);

  if (!token && request.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  } else if (token && request.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/", "/profile", "/contact", "/login"],
};
