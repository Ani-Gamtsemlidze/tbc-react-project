import { NextResponse } from "next/server";
import { AUTH_COOKIE } from "./constants";
import createMiddleware from "next-intl/middleware";

function loginMiddleware(request) {
  const token = request.cookies.get(AUTH_COOKIE);

  if (!token && !request.nextUrl.pathname.includes("login")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

const langMiddleware = createMiddleware({
  locales: ["ka", "en"],
  defaultLocale: "en",
});

export default function middleware(request) {
  return loginMiddleware(request) || langMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
