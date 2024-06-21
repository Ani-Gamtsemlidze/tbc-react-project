"use client";
import { useState } from "react";
import { acme, adamina } from "../../app/fonts";
import ProductsCategories from "./ProductsCategories";
import ProductsSearch from "./ProductsSearch";
import { ProductsPageProps } from "./ProductsPage";

const ProductsFeatures = ({ productsData }: ProductsPageProps) => {
  function handleOpenSearchBox() {
    setIsOpen(!isOpen);
  }

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`flex flex-col top-32 ${!isOpen ? "sticky" : "fds "}`}>
      <ProductsSearch
        handleOpenSearchBox={handleOpenSearchBox}
        isOpen={isOpen}
        productsData={productsData}
      />
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
  );
};

export { ProductsFeatures };
