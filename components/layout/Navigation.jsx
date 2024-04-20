"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  const navigation = [
    { title: "Home", href: "/" },
    { title: "Profile", href: "/profile" },
    { title: "Contact", href: "/contact" },
    { title: "Blog", href: "/blog" },
  ];

  return (
    <nav>
      <ul className="flex mr-8 my-3">
        {navigation.map((list) => (
          <li key={list.href}>
            <Link
              className={`text-white mr-4 text-dm transition rounded dark:text-white ${
                pathname === list.href ? "active" : ""
              }`}
              href={list.href}
            >
              {list.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
