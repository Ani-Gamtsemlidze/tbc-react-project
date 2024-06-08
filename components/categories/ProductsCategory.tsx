"use client";

import { useEffect, useState } from "react";
import { getProductsCategory } from "../../user-api";
import { Recipe } from "../recipes/RecipesPage";
import { acme, adamina, oleo } from "../../app/fonts";
import ProductsCard from "../products/ProductsCard";
import ProductsCategories from "../products/ProductsCategories";

interface CategoryProps {
  categoryName: string;
}

export default function ProductsCategory({ categoryName }: CategoryProps) {
  const [data, setData] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchCategory = async (category: string) => {
      try {
        const categoryData = await getProductsCategory(category);
        setData(categoryData?.rows || []);
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    const decodedCategory = decodeURIComponent(categoryName);
    fetchCategory(decodedCategory);
  }, [categoryName]);

  const decodedCategory = decodeURIComponent(categoryName);

  return (
    <div className="flex flex-col h-screen w-full bg-mainBackground dark:bg-slate-500">
      <h1
        className={`text-center text-5xl text-[#035C41] ${oleo.className} my-12`}
      >
        {decodedCategory} Products
      </h1>
      <div className="flex items-start">
        <div className="ml-8">
          <h1 className={`font-bold text-[#035C41] text-3xl ${acme.className}`}>
            Categories
          </h1>
          <ul className={`flex flex-col text-xl ${adamina.className}`}>
            <ProductsCategories />
          </ul>
        </div>
        {data.length === 0 ? (
          <p>No Products found.</p>
        ) : (
          <div className="flex flex-wrap justify-start">
            <ProductsCard data={data} />
          </div>
        )}
      </div>
    </div>
  );
}
