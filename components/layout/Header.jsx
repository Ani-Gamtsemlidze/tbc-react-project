import Link from "next/link";
import Image from "next/image";
import Navigation from "./Navigation";
import LogoutBtn from "../logout/LogoutBtn";
import { logout } from "@/app/actions";

export default function Header() {
  const handleLogout = async () => {
    "use server";
    await logout();
  };

  return (
    <header className="flex  justify-between items-center  bg-gray-900 py-1 px-8">
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
      <LogoutBtn handleLogout={handleLogout} />
    </header>
  );
}
