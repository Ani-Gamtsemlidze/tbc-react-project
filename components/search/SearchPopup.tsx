import { CiSearch } from "react-icons/ci";
import { oleo } from "../../app/fonts";
import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { getAllCategories, getRecipes } from "../../user-api";
// import { useSearch } from "../../hooks";

interface Category {
  id: number;
  name: string;
}

interface Recipe {
  id: number;
  title: string;
  price: number;
  category: string[];
  images: string;
}

interface Image {
  [key: string]: string;
}

interface SearchPopupProps {
  isOpen: boolean;
  handleOpenSearchBox: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const images: Image = {
  Spicy: "/images/search_categories/Spicy.jpg",
  Quick: "/images/search_categories/Quick.jpg",
  Dinner: "/images/search_categories/Dinner.jpg",
  Salad: "/images/search_categories/Salad.jpg",
  Mushrooms: "/images/search_categories/Mushrooms.jpg",
  Soups: "/images/search_categories/Soups.jpg",
};

export default function SearchPopup({
  isOpen,
  handleOpenSearchBox,
}: SearchPopupProps) {
  const [allCategories, setAllCategories] = useState<Category[]>([]);
  const [recipesData, setRecipesData] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const recipes = await getRecipes();
      setRecipesData(recipes);
      // setFilteredRecipes(recipes);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  // const { searchQuery, filteredRecipes, handleSearch } = useSearch(recipesData);

  const debounce = (func: (...args: any[]) => void, delay: number) => {
    let timerId: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const debounceSearch = useCallback(
    debounce((searchQuery: string) => {
      console.log("Debounced search query:", searchQuery);
      const filtered = recipesData?.filter((recipe: any) =>
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredRecipes(filtered || []);
    }, 500),
    [recipesData]
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    console.log(searchQuery);
    setSearchQuery(searchQuery);
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
            className="bg-white w-[650px] max-h-[410px] overflow-y-auto rounded-2xl fixed"
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
              <div className="flex flex-wrap  items-center justify-center my-4 ">
                {searchQuery.length !== 0
                  ? filteredRecipes.map((recipe: Recipe, index: number) => (
                      <Link
                        href={`/recipes/${recipe.id}`}
                        className="flex items-center mx-12 w-full my-4 transition hover:bg-[rgb(244,244,244)] rounded-lg "
                        key={index}
                      >
                        <div className="items-start">
                          <Image
                            className="w-20 h-20 object-cover rounded-lg"
                            src={recipe.images[0]}
                            alt="image"
                            width={400}
                            height={400}
                          />
                        </div>
                        <h1 className="text-[#16442a] font-bold text-xl ml-4">
                          {recipe.title}
                        </h1>
                        <p className="text-black text-xl border-l ml-3 pl-3">
                          {recipe.category}
                        </p>
                      </Link>
                    ))
                  : allCategories.slice(0, 6).map((category: Category) => (
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
