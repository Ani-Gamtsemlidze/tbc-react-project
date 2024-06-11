// import { useTranslations } from "next-intl";
import { CiSearch } from "react-icons/ci";
import PriceFilter from "./PriceFilter";
import { useState } from "react";
import ProductSearchPopUp from "../search/ProductSearchPopup";

export default function ProductsSearch({ productsData }: any) {
  // const t = useTranslations("Header");
  const [isOpen, setIsOpen] = useState(false);
  function handleOpenSearchBox() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="flex   dark:border-[#B85042] dark:border-t items-center justify-center  dark:bg-slate-700   ">
      <div onClick={handleOpenSearchBox} className="relative mr-8">
        <CiSearch className="cursor-pointer  text-3xl " />
        <ProductSearchPopUp
          productsData={productsData}
          isOpen={isOpen}
          handleOpenSearchBox={handleOpenSearchBox}
        />
      </div>
      <PriceFilter />
    </div>
  );
}
