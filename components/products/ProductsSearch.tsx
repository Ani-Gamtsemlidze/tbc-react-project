// import { useTranslations } from "next-intl";
import { CiSearch } from "react-icons/ci";
import PriceFilter from "./PriceFilter";
import ProductSearchPopUp from "../search/ProductSearchPopup";

export default function ProductsSearch({
  productsData,
  handleOpenSearchBox,
  isOpen,
}: any) {
  // const t = useTranslations("Header");

  return (
    // <div className="flex  mb-4 dark:border-[#B85042] dark:border-t items-center justify-center  dark:bg-slate-700   ">
    <>
      <div onClick={handleOpenSearchBox} className="mb-4 h-[50px]">
        <div className="relative  h-full">
          <div className=" h-full flex items-center w-full transition text-sm hover:bg-#E895D0 hover:placeholder-[#16442a] hover:text-[#16442a]  border-[rgb(122,122,122)]  rounded-md  border cursor-pointer p-2 pl-10 bg-transparent placeholder-black focus:outline-none text-black ">
            Search for Products
          </div>

          <CiSearch className="absolute top-[50%] translate-y-[-50%] left-2" />
        </div>
        <ProductSearchPopUp
          productsData={productsData}
          isOpen={isOpen}
          handleOpenSearchBox={handleOpenSearchBox}
        />
      </div>
      <div>
        <PriceFilter />
      </div>
    </>
    // </div>
  );
}
