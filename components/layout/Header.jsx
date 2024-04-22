import Link from "next/link";
import Image from "next/image";
import Navigation from "./Navigation";
import LogoutBtn from "../logout/LogoutBtn";
import ThemeSwitch from "../theme/ThemeSwitch";
import LocalSwitcher from "../langSwitcher/LocalSwitcher";

export default function Header() {
  return (
    <header className="flex  justify-between items-center bg-[#B85042] dark:bg-slate-600 py-1 px-8">
      <div className="flex items-center  justify-center">
        <Link className="" href="/">
          <Image
            alt="X-logo"
            className="w-6 h-6 object-contain mr-4"
            src="/images/X-Logo.png"
            width={24}
            height={24}
          />
        </Link>
        <Navigation />
      </div>
      <div className="flex items-center">
        <ThemeSwitch />
        <LocalSwitcher />

        <LogoutBtn />
      </div>
    </header>
  );
}
