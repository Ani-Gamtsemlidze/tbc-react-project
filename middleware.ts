import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0/edge";

function pathProtected (pathName: string) {
  const protectedRoutes = ["/profile", "/users", "/recipes"];

  for (const route of protectedRoutes) {
      if(pathName.startsWith(route)) {
        return true;
      }
  }
  return false;
}

const langMiddleware = createMiddleware({
  locales: ["ka", "en"],
  defaultLocale: "en",
  localePrefix: 'never',
});

export default async function middleware(request:NextRequest) {
  const response = NextResponse.next()
  const session = await getSession(request, response);

  const pathName = request.nextUrl.pathname;
  
  if (!session?.user && pathProtected(pathName)) {
    return NextResponse.rewrite(new URL("/api/auth/login", request.url));
  }

  return  langMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};