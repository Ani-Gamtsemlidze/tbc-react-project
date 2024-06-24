"use client";
import { useEffect, useState } from "react";
import { getAllCategories } from "../../user-api";
import Link from "next/link";
import { inter } from "../../app/fonts";

interface Category {
  id: string;
  name: string;
}

export default function AllCategories() {
  const [allCategories, setAllCategories] = useState<Category[]>([]);

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
    <div className="flex flex-col justify-star mt-2">
      {allCategories.map((category) => (
        <Link
          href={`/recipes/category/${category.name}`}
          key={category.id}
          className=" dark:text-darkTextColor text-[#27343A]"
        >
          <h1 className={`text-xl  ${inter.className}`}>{category.name}</h1>
        </Link>
      ))}
    </div>
  );
}
