"use client";

import ProductsCard, { Product } from "./ProductsCard";
import { acme, adamina } from "../../app/fonts";

import ProductsCategories from "./ProductsCategories";
import ProductsSearch from "./ProductsSearch";

interface HomePageProps {
  productsData: Product[];
}

export default function ProductsPage({ productsData }: HomePageProps) {
  return (
    <div className="flex flex-col  bg-mainColor dark:bg-gray-700 relative">
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center"></div>
      </div>

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
        <div className="flex  ml-36">
          <ProductsCard data={productsData} />
        </div>
      </div>
    </div>
  );
}
