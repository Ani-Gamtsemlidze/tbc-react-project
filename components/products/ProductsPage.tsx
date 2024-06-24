"use client";

import ProductsCard, { Product } from "./ProductsCard";
import { acme, monda } from "../../app/fonts";

import { MdAddCircleOutline } from "react-icons/md";
import useDropdown from "../../hooks";
import AddProduct from "./AddProduct";
import { useAdmin } from "../../app/context/AdminContext";
import { ProductsFeatures } from "./ProductsFeatures";
import { useTranslations } from "next-intl";

export interface ProductsPageProps {
  productsData: Product[];
}

export default function ProductsPage({ productsData }: ProductsPageProps) {
  const { isDropDown, handleDropDown, popupRef } = useDropdown();
  const t = useTranslations("Products");

  const { isAdmin } = useAdmin();
  const { filteredData } = useAdmin();

  return (
    <>
      <div
        className={`   flex flex-col  bg-mainColor dark:bg-darkBgColor relative  `}
      >
        {isAdmin && (
          <>
            <div className="flex justify-end w-full mt-6">
              <div
                onClick={handleDropDown}
                className="bg-[#E895D0] mr-2 justify-center w-48 h-[38px] flex items-center  cursor-pointer rounded-md px-4 py-6 "
              >
                <MdAddCircleOutline className="text-xl text-white cursor-pointer" />
                <button
                  className={`text-lg font-bold ml-4  text-white  ${monda.className}`}
                >
                  Add Product
                </button>
              </div>
            </div>
            <div className="text-center my-8">
              <div className="flex items-center justify-center ">
                {isDropDown && (
                  <div ref={popupRef}>
                    <AddProduct handleDropDown={handleDropDown} />
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        <div className="flex justify-center relative ">
          <div className="mt-24 ">
            <p className="text-center  text-3xl dark:text-mainColor text-[#035C41] ">
              {t("exploring")}
            </p>
            <h1
              className={`text-center text-7xl dark:text-mainColor ${acme.className} my-6 text-[#035C41]`}
            >
              {t("products")}
            </h1>
          </div>
        </div>
        <div className="flex my-12 max-w-[1300px] mx-auto">
          <div className="">
            <ProductsFeatures productsData={productsData} />
          </div>
          <div className="flex w-full ml-6">
            <ProductsCard
              data={
                (filteredData?.length > 0
                  ? filteredData
                  : productsData) as Product[]
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
