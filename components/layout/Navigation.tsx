"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navigation() {
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  const navigation = [
    { title: t("home"), href: `/`, src: "/images/Shape.svg" },
    { title: t("products"), href: `/products`, src: "/images/movies.svg" },
    { title: t("profile"), href: `/profile`, src: "/images/movies.svg" },
    { title: t("contact"), href: `/contact`, src: "/images/Bookmark.svg" },
    { title: t("recipes"), href: `/recipes`, src: "/images/movies.svg" },
  ];

  return (
    <nav className="fill  ">
      <ul className=" flex mr-8 my-3 ">
        {navigation.map((list) => (
          <li key={list.href} className="flex items-center">
            {list.src && (
              <Image
                className="mr-4"
                src={list.src}
                alt={`${list.title} icon`}
                width={18}
                height={18}
              />
            )}
            <Link
              className={`  no-underline text-[#4C4C4C] mr-4 rounded dark:text-[#92a7dd] text-sm
              block py-2 px-3 font-bold my-2 uppercase relative

              after:content-['.'] after:text-left after:opacity-5 after:m-0 
              after:absolute after:mx-auto after:text-transparent after:inset-x-0 after:bottom-0	after:w-0  after:bg-[#aaa] after:h-[1px]
             transition-all 

              duration-[0.5s]

              hover:text-white hover:delay-200 hover:z-10 dark:hover:text-[#E2E8F0]

              
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
