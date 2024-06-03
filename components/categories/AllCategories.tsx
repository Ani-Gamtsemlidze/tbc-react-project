"use client";
import { useEffect, useState } from "react";
import { getAllCategories } from "../../user-api";
import Link from "next/link";

export default function AllCategories() {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    fetchAllCategories();
  }, []);

  const fetchAllCategories = async () => {
    try {
      const categories = await getAllCategories();
      setAllCategories(categories);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="flex flex-col justify-start bg-gray-200 dark:bg-gray-700 mt-6">
      {allCategories.map((category: any) => (
        <Link
          href={`/recipes/category/${category.name}`}
          key={category.id}
          className="ml-4"
        >
          <h1 className="text-xl">{category.name}</h1>
        </Link>
      ))}
    </div>
  );
}
