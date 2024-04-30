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
      <header className="flex  justify-between items-center bg-[#F6F3EC] dark:bg-slate-600 py-1 px-8">
        <div className="flex items-center">
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
        <div className="flex items-center justify-center">
          {/* <RiSearch2Line /> */}
          <ThemeSwitch />
          <LocalSwitcher />
          <LogoutBtn />
        </div>
      </header>
    </>
  );
}
