"use client";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { usePathname } from "next/navigation";
import { FiChevronDown, FiChevronUp, FiGlobe } from "react-icons/fi";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const [isBoxOpen, setIsBoxOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const localActive = useLocale();

  const getPathWithoutLocale = (pathname: string, locale: string) => {
    const prefixRegex = new RegExp(`^/${locale}`);
    return pathname.replace(prefixRegex, "");
  };

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    const pathnameWithoutLocale = getPathWithoutLocale(pathname, localActive);
    startTransition(() => {
      router.replace(`/${nextLocale}${pathnameWithoutLocale}`);
    });
  };

  return (
    <>
      <label className=" mx-4 border-l border-r pl-4 flex items-center ">
        <button className="">
          <FiGlobe />
        </button>
        <select
          onClick={() => setIsBoxOpen(!isBoxOpen)}
          defaultValue={localActive}
          className="py-1 px-2 w-full rounded text-black bg-transparent outline-none  cursor-pointer"
          onChange={onSelectChange}
          disabled={isPending}
        >
          <option value="en">English</option>
          <option value="ka">ქართული</option>
        </select>
        <div className="pr-2">
          {isBoxOpen ? <FiChevronDown /> : <FiChevronUp />}
        </div>
      </label>
    </>
  );
}
