import Link from "next/link";
import Image from "next/image";
import Navigation from "./Navigation";

import { cookies } from "next/headers";
import { AUTH_COOKIE_TOKEN } from "@/constants";
import { redirect } from "next/navigation";
import LogoutBtn from "../logout/LogoutBtn";
import { logout } from "@/app/actions";

export default function Header() {

  const handleLogout = async () => {
    "use server";
    await logout();
  };

  return (
    <header className="flex  justify-between items-center  bg-gray-900">
      <Link className="ml-8" href="/">
        <Image
          alt="X-logo"
          className="w-6 h-6 object-contain"
          src="/images/X-Logo.png"
          width={24}
          height={24}
        />
      </Link>
      <Navigation />
      <LogoutBtn handleLogout={handleLogout} />
    </header>
  );
}
