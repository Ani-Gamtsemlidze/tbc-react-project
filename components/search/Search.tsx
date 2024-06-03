"use client";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { oleo } from "../../app/fonts";
import Image from "next/image";
import Link from "next/link";
import { getAllCategories } from "../../user-api";
// import { IoIosCloseCircleOutline } from "react-icons/io";

// import { ChangeEvent } from "react";
// import ItemsBucket from "./ItemsBucket";

// interface SearchProps {
//   onSort: () => void;
//   searchItem: string;
//   onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
//   total: any;
// }
// { searchItem, onSearch }: SearchProps

export function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [allCategories, setAllCategories] = useState([]);

  const images: any = {
    spicy: "/images/search_categories/spicy.jpg",
    quick: "/images/search_categories/quick.jpg",
    dinner: "/images/search_categories/dinner.jpg",
    salad: "/images/search_categories/salad.jpg",
    mushrooms: "/images/search_categories/mushrooms.jpg",
    soups: "/images/search_categories/soups.jpg",
  };

  const t = useTranslations("Header");
  function handleOpenSearchBox() {
    setIsOpen(!isOpen);
  }

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
    <div className="flex  dark:border-[#B85042] dark:border-t items-center justify-center  dark:bg-slate-700 absolute top-2 right-4  ">
      <div className="relative">
        <div
          onClick={handleOpenSearchBox}
          className="transition hover:bg-[#e1e1e1] hover:placeholder-[#16442a] hover:text-[#16442a]  border-[rgb(122,122,122)]  rounded-md  border cursor-pointer p-2 pl-10 bg-transparent placeholder-black focus:outline-none text-black "
        >
          {t("search")}
        </div>

        <CiSearch className="absolute top-[50%] translate-y-[-50%] left-2" />
      </div>

      <div>
        {isOpen && (
          <div className=" bg-[rgba(0,0,0,0.7)] flex items-center justify-center h-screen fixed top-0  w-screen right-0 z-50 ">
            <div className="bg-white w-[650px] h-[410px] rounded-2xl fixed">
              {/* <IoIosCloseCircleOutline className="text-2xl " /> */}

              <form className="relative flex ml-12 mt-8 items-center">
                <input
                  className="transition w-[500px] py-3  hover:placeholder-[#16442a] focus:border-[#16442a] hover:text-[#16442a] border-[rgb(227,227,227  hover:border-[#16442a] rounded-md  border cursor-pointer p-2 bg-transparent placeholder-black focus:outline-none pl-12 text-black "
                  id="search"
                  type="text"
                  // value={searchItem}
                  // onChange={(e) => onSearch(e)}
                  placeholder="What would you like to cook?"
                />
                <div
                  onClick={() => setIsOpen(false)}
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
                  {allCategories.slice(0, 6).map((category: any) => (
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
      {/* <button
        className="transition justify-center py-2 px-4 ml-2 border-[#B85042]   text-md border text-black hover:bg-[#E7E8D1] hover:text-[#B85042]"
        onClick={onSort}
      >
        {t("sort")}
      </button> */}
      {/* <ItemsBucket total={total} /> */}
    </div>
  );
}
