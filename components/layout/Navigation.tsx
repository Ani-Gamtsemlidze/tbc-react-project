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
    { title: t("recipes"), href: `/recipes` },
    { title: t("contact"), href: `/contact` },
  ];

  return (
    <nav className="fill  ">
      <ul className=" flex ml-8 my-3 ">
        {navigation.map((list) => (
          <li key={list.href} className="flex items-center">
            <Link
              className={` text-md no-underline text-[#4C4C4C] mr-4 rounded dark:text-[#92a7dd]
              block py-3 px-5 font-bold my-2 uppercase relative

              after:content-['.'] after:text-left after:opacity-5 after:m-0 
              after:absolute after:mx-auto after:text-transparent after:inset-x-0 after:bottom-0	after:w-0  after:bg-[#aaa] after:h-[1px]
             transition-all 

              duration-[0.5s]

              hover:text-white hover:delay-200 hover:z-10 dark:hover:text-[#E2E8F0]

              
              ${
                list.href === "/" && pathname !== "/"
                  ? ""
                  : pathname.includes(list.href)
                  ? "active"
                  : ""
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
