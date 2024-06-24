import React from "react";
import PriceFilter from "./PriceFilter";

const ProductsSideBar = () => {
  return (
    <div className="min-h-screen w-screen top-16 left-0 overflow-y-auto absolute a-50 z-50">
      <div className="my-4 flex h-5/6 w-72 flex-col rounded-tr-2xl rounded-br-2xl bg-gray-200">
        <ul className="mt-12 flex flex-col">
          <li className="relative transition">
            <PriceFilter />
          </li>

          {/* <div className=" mt-8 ">
            <h1
              className={`font-bol dark:text-mainColor text-[#035C41] text-3xl  ${acme.className} `}
            >
              Categories
            </h1>
            <ul className={`flex flex-col text-xl ${adamina.className}`}>
              <ProductsCategories />
            </ul>
          </div> */}
        </ul>
      </div>
    </div>
  );
};

export { ProductsSideBar };
