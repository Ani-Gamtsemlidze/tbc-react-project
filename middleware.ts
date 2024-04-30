import { NextResponse } from "next/server";
import { AUTH_COOKIE } from "./constants";
import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";

function loginMiddleware(request:NextRequest) {
  const token = request.cookies.get(AUTH_COOKIE);

  if (!token && !request.nextUrl.pathname.includes("login")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return
}

const langMiddleware = createMiddleware({
  locales: ["ka", "en"],
  defaultLocale: "en",

  localePrefix: 'never'
});

export default function middleware(request:NextRequest) {
  return loginMiddleware(request) || langMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
