"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ChangeEvent } from "react";
import { IoCartOutline } from "react-icons/io5";

interface SearchProps {
  onSort: () => void;
  searchItem: string;
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  selectedNum: number;
}

function Search({ onSort, searchItem, onSearch, selectedNum }: SearchProps) {
  const t = useTranslations("Header");
  return (
    <div className="flex   dark:border-[#B85042] dark:border-t items-center justify-center bg-[#B85042] dark:bg-slate-700   py-4  ">
      <form>
        <input
          className="transition hover:bg-[#E7E8D1] hover:placeholder-[#B85042] hover:text-[#B85042]   border cursor-pointer p-2 pl-4 bg-transparent placeholder-white focus:outline-none text-white "
          id="search"
          type="text"
          value={searchItem}
          onChange={(e) => onSearch(e)}
          placeholder={t("search")}
        />
      </form>
      <button
        className="transition justify-center py-2 px-4 ml-2   text-md border text-white hover:bg-[#E7E8D1] hover:text-[#B85042]"
        onClick={onSort}
      >
        {t("sort")}
      </button>
      <Link href="/checkout" className="flex relative">
        <IoCartOutline className="w-6 h-6 text-white ml-4 object-cover cursor-pointer" />
        <span className="absolute bottom-4 right-[-8px] text-white">
          {selectedNum}
        </span>
      </Link>
    </div>
  );
}

export default Search;
