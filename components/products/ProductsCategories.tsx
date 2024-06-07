"use client";
import { useEffect, useState } from "react";
import { getProductsCategories } from "../../user-api";
import Link from "next/link";
import { inter } from "../../app/fonts";

export default function ProductsCategories() {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    fetchAllCategories();
  }, []);

  const fetchAllCategories = async () => {
    try {
      const categories = await getProductsCategories();

      setAllCategories(categories);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="flex flex-col justify-start  dark:bg-gray-700 mt-2">
      {allCategories.map((category: any) => (
        <Link
          href={`/products/product_category/${category.name}`}
          key={category.id}
          className=" text-[#27343A]"
        >
          <h1 className={`text-xl ${inter.className}`}>{category.name}</h1>
        </Link>
      ))}
    </div>
  );
}
