"use client";
import { useEffect, useState } from "react";
import { getAllCategories } from "../../user-api";
import Link from "next/link";
import { inter } from "../../app/fonts";

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
    <div className="flex flex-col justify-star mt-2">
      {allCategories.map((category: any) => (
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
