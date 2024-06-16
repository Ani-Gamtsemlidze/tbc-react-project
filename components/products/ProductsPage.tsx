"use client";

import ProductsCard, { Product } from "./ProductsCard";
import { acme, adamina, monda } from "../../app/fonts";

import ProductsCategories from "./ProductsCategories";
import ProductsSearch from "./ProductsSearch";
import { MdAddCircleOutline } from "react-icons/md";
import useDropdown from "../../hooks";
import AddProduct from "./AddProduct";
import { useAdmin } from "../../app/context/AdminContext";

interface HomePageProps {
  productsData: Product[];
}

export default function ProductsPage({ productsData }: HomePageProps) {
  const { isDropDown, handleDropDown, popupRef } = useDropdown();
  const { isAdmin } = useAdmin();

  return (
    <div className="flex flex-col  bg-mainColor dark:bg-gray-700 relative">
      {/* <div className="flex items-center justify-center">
        <div className="flex items-center justify-center"></div>
      </div> */}
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

      <div className="flex justify-center ">
        <div className="mt-24 ">
          <p className="text-center  text-3xl dark:text-mainColor text-[#035C41] ">
            Explore
          </p>
          <h1
            className={`text-center text-7xl dark:text-mainColor ${acme.className} my-6 text-[#035C41]`}
          >
            All Products
          </h1>
        </div>
      </div>
      <div className="flex my-12 ">
        <div className="flex flex-col pl-12">
          <ProductsSearch productsData={productsData} />
          <div className=" mt-8 ">
            <h1
              className={`font-bol dark:text-mainColor text-[#035C41] text-3xl  ${acme.className} `}
            >
              Categories
            </h1>
            <ul className={`flex flex-col text-xl ${adamina.className}`}>
              <ProductsCategories />
            </ul>
          </div>
        </div>
        <div className="flex w-full ml-36">
          <ProductsCard data={productsData} />
        </div>
      </div>
    </div>
  );
}
