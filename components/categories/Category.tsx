"use client";

import { useEffect, useState } from "react";
import { getCategory } from "../../user-api";

interface Recipe {
  id: number;
  title: string;
  introduction: string;
}

interface CategoryProps {
  categoryName: string;
}

export default function Category({ categoryName }: CategoryProps) {
  const [data, setData] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategory(categoryName);
  }, [categoryName]);

  const fetchCategory = async (categoryName: string) => {
    console.log("categoryNAME", categoryName);
    try {
      const category = await getCategory(categoryName);
      setData(category.rows || []); // Check if category.rows exists
      setLoading(false);
    } catch (error) {
      console.error("Error fetching category:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{categoryName} Recipes</h1>
      {data.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <div className="recipe-list">
          {data.map((recipe) => (
            <div key={recipe.id} className="recipe-item">
              <h2>{recipe.title}</h2>
              <p>{recipe.introduction}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
