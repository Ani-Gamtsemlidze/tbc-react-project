"use client";
import { useState } from "react";
import { acme, adamina } from "../../app/fonts";
import ProductsCategories from "./ProductsCategories";
import ProductsSearch from "./ProductsSearch";
import { ProductsPageProps } from "./ProductsPage";
import { useTranslations } from "next-intl";

const ProductsFeatures = ({ productsData }: ProductsPageProps) => {
  const t = useTranslations("Products");
  function handleOpenSearchBox() {
    setIsOpen(!isOpen);
  }

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`flex max-lg:pl-8 flex-col  top-32 max-lg:mb-4 ${
        !isOpen ? "sticky max-lg:static" : "fds "
      }`}
    >
      <ProductsSearch
        handleOpenSearchBox={handleOpenSearchBox}
        isOpen={isOpen}
        productsData={productsData}
      />
      <div className=" mt-8 ">
        <h1
          className={`font-bol dark:text-mainColor text-[#035C41] text-3xl  ${acme.className} `}
        >
          {t("categories")}
        </h1>
        <ul className={`flex flex-col text-xl ${adamina.className}`}>
          <ProductsCategories />
        </ul>
      </div>
    </div>
  );
};

export { ProductsFeatures };