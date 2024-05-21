"use client";
import Link from "next/link";
import Image from "next/image";
import Navigation from "./Navigation";
import LogoutBtn from "../logout/LogoutBtn";
import LocalSwitcher from "../langSwitcher/LocalSwitcher";
import ThemeSwitch from "../theme/ThemeSwitch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme } = useTheme();
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
      <header className="flex h-screen justify-between  items-center flex-col w-56 fixed left-0 top-0 z-50  bg-[#979797] dark:bg-slate-600 py-1 px-8">
        <div className="flex  flex-col">
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
        </div>
        <div className="flex items-center justify-center flex-col">
          {/* <RiSearch2Line /> */}
          <ThemeSwitch />
          <LocalSwitcher />
          <LogoutBtn />
        </div>
      </header>
    </>
  );
}
