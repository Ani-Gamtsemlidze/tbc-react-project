import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0/edge";

function pathProtected(pathName: string): boolean {
  const protectedRoutes = ["/profile", "/orders", "/myrecipes", "/checkout"];
  return protectedRoutes.some(route => pathName.startsWith(route));
}

const langMiddleware = createMiddleware({
  locales: ["ka", "en"],
  defaultLocale: "en",
  localePrefix: 'never',
});

export default async function middleware(request: NextRequest): Promise<NextResponse> {

  const response = NextResponse.next();
  
  const session = await getSession(request, response);

  const pathName = request.nextUrl.pathname;

  if (!session?.user && pathProtected(pathName)) {
    return NextResponse.redirect(new URL("/api/auth/login", request.url));
  }

  const langResponse = await langMiddleware(request);

  return langResponse || response;
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
