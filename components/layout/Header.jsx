import Link from "next/link";
import Image from "next/image";
import Navigation from "./Navigation";

export default function Header() {
    return (
        <header className="flex  justify-between items-center  bg-gray-900">
        <Link  className="ml-8"  href="/">
        <Image
          alt="X-logo"
          className="w-6 h-6 object-contain"
          src="/images/X-Logo.png"
          width={24}
          height={24}
        />
        </Link>
      <Navigation />
       </header>
    );
}

