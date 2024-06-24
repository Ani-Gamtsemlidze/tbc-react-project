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
        </ul>
      </div>
    </div>
  );
};

export { ProductsSideBar };
