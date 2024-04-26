"use client";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { usePathname } from "next/navigation";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
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
    <label className=" mx-4 border-l pl-4  ">
      <select
        defaultValue={localActive}
        className="py-1 px-2 rounded text-black  bg-[#E5E7EB] outline-none  cursor-pointer"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="en">English</option>
        <option value="ka">Georgian</option>
      </select>
    </label>
  );
}
