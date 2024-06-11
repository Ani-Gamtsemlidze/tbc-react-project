"use client";
import { useTranslations } from "next-intl";
import { CiSearch } from "react-icons/ci";

import SearchPopup from "./SearchPopup";
import useDropdown from "../../hooks";

// import { ChangeEvent } from "react";
// import ItemsBucket from "./ItemsBucket";

// interface SearchProps {
//   onSort: () => void;
//   searchItem: string;
//   onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
//   total: any;
// }
// { searchItem, onSearch }: SearchProps

// const debounceSearch = useCallback(
//   debounce((searchQuery: string) => {
//     const priceSearch = Number(searchQuery);

//     const filtered = itemsData.filter((item) =>
//       Object.values(item).some((value) =>
//         typeof value === "string"
//           ? value.toLowerCase().includes(searchQuery.toLowerCase())
//           : !isNaN(priceSearch) && item.price === priceSearch
//       )
//     );

//     // setFilteredItems(filtered);
//     // setIsFiltered(true);
//     setItemsData(filtered);
//   }, 500),
//   []
// );

// const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const searchQuery = e.target.value;
//   // setSearchItem(searchQuery);
//   debounceSearch(searchQuery);
// };

export function RecipesSearch() {
  const { isDropDown, handleDropDown, popupRef } = useDropdown();
  const t = useTranslations("Header");

  //   if (isOpen) {
  //     document.body.classList.add("overflow-hidden");
  //   } else {
  //     document.body.classList.remove("overflow-hidden");
  //   }
  //   return () => {
  //     document.body.classList.remove("overflow-hidden");
  //   };
  // }, [isOpen]);

  // function handleOpenSearchBox() {
  //   setIsOpen(!isOpen);
  // }

  // useEffect(() => {
  //   function handleClickOutside(event: MouseEvent) {
  //     if (
  //       popupRef.current &&
  //       !popupRef.current.contains(event.target as Node)
  //     ) {
  //       setIsOpen(false);
  //     }
  //   }

  //   if (isOpen) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   } else {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [isOpen]);

  return (
    <div className="flex  dark:border-[#B85042] dark:border-t items-center justify-center  dark:bg-slate-700  ">
      <div className="relative">
        <div
          onClick={handleDropDown}
          className="transition text-sm hover:bg-#E895D0 hover:placeholder-[#16442a] hover:text-[#16442a]  border-[rgb(122,122,122)]  rounded-md  border cursor-pointer p-2 pl-10 bg-transparent placeholder-black focus:outline-none text-black "
        >
          {t("search")}
        </div>

        <CiSearch className="absolute top-[50%] translate-y-[-50%] left-2" />
      </div>

      <div ref={popupRef}>
        <SearchPopup isOpen={isDropDown} handleOpenSearchBox={handleDropDown} />
      </div>
    </div>
  );
}
