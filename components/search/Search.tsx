"use client";
import { useTranslations } from "next-intl";
import { ChangeEvent } from "react";
import ItemsBucket from "./ItemsBucket";

interface SearchProps {
  onSort: () => void;
  searchItem: string;
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function Search({ onSort, searchItem, onSearch }: SearchProps) {
  const t = useTranslations("Header");

  return (
    <div className="flex  mt-4 dark:border-[#B85042] dark:border-t items-center justify-center  dark:bg-slate-700   py-4  ">
      <form>
        <input
          className="transition hover:bg-[#E7E8D1] hover:placeholder-[#B85042] hover:text-[#B85042] border-[#B85042]  border cursor-pointer p-2 pl-4 bg-transparent placeholder-black focus:outline-none text-black "
          id="search"
          type="text"
          value={searchItem}
          onChange={(e) => onSearch(e)}
          placeholder={t("search")}
        />
      </form>
      <button
        className="transition justify-center py-2 px-4 ml-2 border-[#B85042]   text-md border text-black hover:bg-[#E7E8D1] hover:text-[#B85042]"
        onClick={onSort}
      >
        {t("sort")}
      </button>
      <ItemsBucket />
    </div>
  );
}
