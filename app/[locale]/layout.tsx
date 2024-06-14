import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import "./globals.css";
import { Providers } from "./providers";
import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { CartProvider } from "../context/CartContext";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

const locales = ["en", "ka"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  unstable_setRequestLocale(params.locale);
  let messages;
  try {
    messages = (await import(`../../messages/${params.locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={params.locale} suppressHydrationWarning>
      <UserProvider>
        <body>
          <NextIntlClientProvider locale={params.locale} messages={messages}>
            <Providers>
              <CartProvider>
                <div className="flex flex-col justify-between h-screen">
                  {children}
                </div>
              </CartProvider>
            </Providers>
          </NextIntlClientProvider>
        </body>
      </UserProvider>
    </html>
  );
}
