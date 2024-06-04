"use client";
import { CiSearch } from "react-icons/ci";
import { oleo } from "../../app/fonts";
import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { getAllCategories, getRecipes } from "../../user-api";

const images: any = {
  spicy: "/images/search_categories/spicy.jpg",
  quick: "/images/search_categories/quick.jpg",
  dinner: "/images/search_categories/dinner.jpg",
  salad: "/images/search_categories/salad.jpg",
  mushrooms: "/images/search_categories/mushrooms.jpg",
  soups: "/images/search_categories/soups.jpg",
};

export default function SearchPopup({ isOpen, handleOpenSearchBox }: any) {
  const [allCategories, setAllCategories] = useState([]);
  const [recipesData, setRecipesData] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [isFilteredRecipes, setIsFilteredRecipes] = useState(false);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const recipes = await getRecipes();
      setRecipesData(recipes);
      setFilteredRecipes(recipes);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  const debounce = <Args extends any[]>(
    func: (...args: Args) => void,
    delay: number
  ) => {
    let timerId: ReturnType<typeof setTimeout>;
    return (...args: Args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };
  const debounceSearch = useCallback(
    debounce((searchQuery: string) => {
      const priceSearch = Number(searchQuery);

      const filtered = recipesData?.filter((recipe: any) =>
        Object.values(recipe).some((value) =>
          typeof value === "string"
            ? value.toLowerCase().includes(searchQuery.toLowerCase())
            : !isNaN(priceSearch) && recipe.price === priceSearch
        )
      );

      setFilteredRecipes(filtered || []);
    }, 500),
    [recipesData]
  );

  console.log(filteredRecipes);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    setIsFilteredRecipes(true);

    debounceSearch(searchQuery);
  };

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
    <div>
      {isOpen && (
        <div
          onClick={handleOpenSearchBox}
          className=" bg-[rgba(0,0,0,0.7)] flex items-center justify-center h-screen fixed top-0  w-screen right-0 z-50 "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-[650px] h-[410px] rounded-2xl fixed"
          >
            <form className="relative flex ml-12 mt-8 items-center">
              <input
                className="transition w-[500px] py-3  hover:placeholder-[#16442a] focus:border-[#16442a] hover:text-[#16442a] border-[rgb(227,227,227  hover:border-[#16442a] rounded-md  border cursor-pointer p-2 bg-transparent placeholder-black focus:outline-none pl-12 text-black "
                id="search"
                type="text"
                onChange={(e) => handleSearch(e)}
                placeholder="What would you like to cook?"
              />
              <div
                onClick={handleOpenSearchBox}
                className="ml-4 cursor-pointer "
              >
                <p>close</p>
              </div>
              <CiSearch className="absolute top-[50%] translate-y-[-50%] left-[18px]" />
            </form>
            <div className="">
              <h3 className={`${oleo.className} ml-12 mt-6 mb-2 text-2xl`}>
                Categories
              </h3>
              <div className="flex flex-wrap  items-center justify-center ">
                {isFilteredRecipes
                  ? filteredRecipes.map((recipe: any, index) => (
                      <div key={index}>
                        <p className="text-black text-2xl">{recipe.title}</p>{" "}
                      </div>
                    ))
                  : allCategories.slice(0, 6).map((category: any) => (
                      <Link
                        href={`/recipes/category/${category.name}`}
                        key={category.id}
                        className=" inline-block grow-0 shrink-0 basis-[27%] border transition hover:bg-[rgb(244,244,244)] border-b-[rgb(227,227,227)] rounded-lg w-36 ml-2 h-28  mt-2"
                      >
                        <Image
                          className="w-14 h-14 object-cover rounded-full mx-auto mt-3"
                          src={images[category.name] || "/images/default.jpg"}
                          alt={category.name}
                          width={300}
                          height={300}
                        />
                        <p className="text-sm text-center mt-2">
                          {category.name}
                        </p>
                      </Link>
                    ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
