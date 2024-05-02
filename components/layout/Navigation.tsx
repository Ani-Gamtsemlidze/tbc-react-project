"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  const navigation = [
    { title: t("home"), href: `/` },
    { title: t("products"), href: `/products` },
    { title: t("profile"), href: `/profile` },
    { title: t("contact"), href: `/contact` },
    { title: t("blog"), href: `/blog` },
  ];

  return (
    <nav className="fill ">
      <ul className=" flex mr-8 my-3">
        {navigation.map((list) => (
          <li key={list.href}>
            <Link
              className={` no-underline text-[#4C4C4C] mr-4 rounded dark:text-white text-lg
              block py-2 px-3 font-bold my-2 uppercase relative

              after:content-['.'] after:text-left after:opacity-5 after:m-0 
              after:absolute after:mx-auto after:text-transparent after:inset-x-0 after:bottom-0	after:w-0  after:bg-[#aaa] after:h-[1px]
             transition-all 

              duration-[0.5s]

              hover:text-white hover:z-10 dark:hover:text-[#E2E8F0]

              
              ${pathname === list.href ? "active" : ""}`}
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
