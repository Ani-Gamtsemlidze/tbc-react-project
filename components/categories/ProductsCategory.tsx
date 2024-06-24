"use client";

import { useEffect, useState } from "react";
import { getProductsCategory } from "../../user-api";
import { oleo } from "../../app/fonts";
import ProductsCard from "../products/ProductsCard";
import { ProductsFeatures } from "../products/ProductsFeatures";
import { useCart } from "../../app/context/CartContext";
import Loading from "../../app/[locale]/loading";

interface CategoryProps {
  categoryName: string;
}

export default function ProductsCategory({ categoryName }: CategoryProps) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { allProducts } = useCart();

  useEffect(() => {
    const fetchCategory = async (category: string) => {
      try {
        setLoading(true);
        const categoryData = await getProductsCategory(category);
        setData(categoryData?.rows || []);
      } catch (error) {
        console.error("Error fetching category:", error);
      } finally {
        setLoading(false);
      }
    };

    const decodedCategory = decodeURIComponent(categoryName);
    fetchCategory(decodedCategory);
  }, [categoryName]);

  if (loading) {
    return <Loading />;
  }

  const decodedCategory = decodeURIComponent(categoryName);

  return (
    <div className="flex flex-col min-h-screen  bg-mainColor dark:bg-slate-500">
      <h1
        className={`text-center text-5xl text-[#035C41] ${oleo.className} my-12`}
      >
        {decodedCategory} Products
      </h1>
      <div className="max-w-[1200px] max-lg:block mx-auto flex justify-center">
        <ProductsFeatures productsData={allProducts} />
        <div className="ml-6">
          <ProductsCard data={data} />
        </div>
      </div>
    </div>
  );
}
