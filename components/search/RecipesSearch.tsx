"use client";
import { useTranslations } from "next-intl";
import { CiSearch } from "react-icons/ci";

import SearchPopup from "./SearchPopup";
import useDropdown from "../../hooks";

export function RecipesSearch() {
  const { isDropDown, handleDropDown, popupRef } = useDropdown();
  const t = useTranslations("Header");
  return (
    <div className="flex   dark:border-[#B85042] dark:border-t items-center justify-center dark:bg-slate-700  ">
      <div className="relative ">
        <div
          onClick={handleDropDown}
          className="transition text-sm hover:bg-#E895D0 hover:placeholder-[#16442a] w-52 pl-8 hover:text-[#16442a]  border-[rgb(122,122,122)]  rounded-lg border cursor-pointer py-3  bg-transparent placeholder-black focus:outline-none text-black "
        >
          {t("search")}
        </div>

        <CiSearch className="absolute top-[34%] left-2" />
      </div>

      <div ref={popupRef}>
        <SearchPopup isOpen={isDropDown} handleOpenSearchBox={handleDropDown} />
      </div>
    </div>
  );
}
