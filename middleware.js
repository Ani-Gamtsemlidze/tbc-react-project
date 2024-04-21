import { NextResponse } from "next/server";
import { AUTH_COOKIE } from "./constants";
import { cookies } from "next/headers";
import createMiddleware from "next-intl/middleware";

function loginMiddleware(request) {
  const token = cookies(request.headers).get(AUTH_COOKIE); // Pass request headers to cookies()

  if (!token && !request.nextUrl.pathname.includes("login")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

const langMiddleware = createMiddleware({
  locales: ["ka", "en"],
  defaultLocale: "en",
  // localeDetection: false,
});

export default function middleware(request) {
  return loginMiddleware(request) || langMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
