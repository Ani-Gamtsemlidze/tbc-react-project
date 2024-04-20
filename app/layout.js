import ThemeSwitch from "@/components/theme/ThemeSwitch";
import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <div className="flex flex-col justify-between h-screen">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
