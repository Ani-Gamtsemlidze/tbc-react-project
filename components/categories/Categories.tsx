"use client";
import { useEffect, useState } from "react";
import { getCategories } from "../../user-api";
import Image from "next/image";
import Link from "next/link";

export default function Categories() {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const recipes = await getCategories();
      console.log(recipes);
      setCategoryData(recipes);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="flex flex-wrap justify-start bg-gray-200 dark:bg-gray-700 mt-6">
      {categoryData.map((category: any) => (
        <Link
          href={`/recipes/category/${category.name}`}
          key={category.id}
          className="ml-4"
        >
          <Image
            className="w-64 h-56 rounded-md object-cover"
            src={category.image}
            width={400}
            height={400}
            alt="recipe image"
          />
          <h1 className="font-bold text-2xl">{category.name}</h1>
        </Link>
      ))}
    </div>
  );
}
