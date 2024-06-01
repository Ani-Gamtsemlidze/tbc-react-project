"use client";
import Link from "next/link";
import Image from "next/image";
import Navigation from "./Navigation";
import LogoutBtn from "../logout/LogoutBtn";
import LocalSwitcher from "../langSwitcher/LocalSwitcher";
import ThemeSwitch from "../theme/ThemeSwitch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import LoginBtn from "../login/LoginBtn";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Header() {
  const { theme } = useTheme();
  const { user } = useUser();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (theme === "dark") {
      setIsDark(false);
    } else {
      setIsDark(true);
    }
  }, [theme]);

  return (
    <>
      <header className="flex justify-between  items-center w-screen bg-[#d7d7da] dark:bg-[#161D2F] py-1 px-8">
        <div className="flex ">
          <Link className="" href="/">
            <Image
              alt="X-logo"
              className="w-16 h-16 object-contain mr-4"
              src={isDark ? "/images/logo.png" : "/images/light-logo.png"}
              width={400}
              height={400}
            />
          </Link>
          <Navigation />
          <div className="flex items-center  mt-6">
            <div className="flex items-center mb-4">
              <ThemeSwitch />

              <div className="ml-4 border-l border-l-slate-600 pl-2">
                {user ? <LogoutBtn /> : <LoginBtn />}
              </div>
            </div>
            <LocalSwitcher />
          </div>
        </div>
      </header>
    </>
  );
}
