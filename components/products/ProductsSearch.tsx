// import { useTranslations } from "next-intl";
import { CiSearch } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
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
    <div className="flex  mt-6  dark:border-[#B85042] dark:border-t items-center justify-center  dark:bg-slate-700 absolute top-2 right-4  ">
      <div onClick={handleOpenSearchBox} className="relative mr-8">
        {/* <div
          //   onClick={handleOpenSearchBox}
          className="transition hover:bg-[#e1e1e1] hover:placeholder-[#16442a] hover:text-[#16442a]  border-[rgb(122,122,122)]  rounded-md  border cursor-pointer p-2 pl-10 bg-transparent placeholder-black focus:outline-none text-black "
        >
          {t("productSearch")}
        </div> */}

        <CiSearch className="cursor-pointer  text-3xl " />
        <ProductSearchPopUp
          productsData={productsData}
          isOpen={isOpen}
          handleOpenSearchBox={handleOpenSearchBox}
        />
      </div>
      <BsCart className="text-3xl cursor-pointer text-[#16442a]" />
      <PriceFilter />

      {/* <SearchPopup isOpen={isOpen} handleOpenSearchBox={handleOpenSearchBox} /> */}

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
