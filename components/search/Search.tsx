"use client";
import { useTranslations } from "next-intl";
// import { ChangeEvent } from "react";
// import ItemsBucket from "./ItemsBucket";

// interface SearchProps {
//   onSort: () => void;
//   searchItem: string;
//   onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
//   total: any;
// }
// { searchItem, onSearch }: SearchProps

export function Search() {
  const t = useTranslations("Header");

  return (
    <div className="flex  dark:border-[#B85042] dark:border-t items-center justify-center  dark:bg-slate-700 absolute top-2 right-4  ">
      <form>
        <input
          className="transition hover:bg-[#16442a] hover:placeholder-[#fff] hover:text-[#B85042] border-[#16442a] rounded-md  border cursor-pointer p-2 pl-4 bg-transparent placeholder-black focus:outline-none text-black "
          id="search"
          type="text"
          // value={searchItem}
          // onChange={(e) => onSearch(e)}
          placeholder={t("search")}
        />
      </form>
      {/* <button
        className="transition justify-center py-2 px-4 ml-2 border-[#B85042]   text-md border text-black hover:bg-[#E7E8D1] hover:text-[#B85042]"
        onClick={onSort}
      >
        {t("sort")}
      </button> */}
      {/* <ItemsBucket total={total} /> */}
    </div>
  );
}
