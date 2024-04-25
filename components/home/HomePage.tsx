"use client";
import { useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import Search from "../search/Search";
import Products from "../products/Products";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
}

interface HomePageProps {
  productsData: {
    products: Product[];
  };
}

export default function HomePage({ productsData }: HomePageProps) {
  const t = useTranslations("Header");
  const { products } = productsData;

  const [itemsData, setItemsData] = useState<Product[]>(products);
  const [isSorted, setIsSorted] = useState(false);
  const [filteredItems, setFilteredItems] = useState<Product[]>([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [searchItem, setSearchItem] = useState("");

  const handleSort = () => {
    setIsSorted(!isSorted);

    if (isSorted) {
      setItemsData([...products]);
    } else {
      let sortedItems;
      if (isFiltered) {
        sortedItems = [...filteredItems].sort((a, b) => a.price - b.price);
      } else {
        sortedItems = [...itemsData].sort((a, b) => a.price - b.price);
      }
      setItemsData(sortedItems);
    }
  };

  const debounce = (func: Function, delay: number) => {
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
      const priceSearch = Number(searchQuery);

      const filtered = itemsData.filter((item) =>
        Object.values(item).some((value) =>
          typeof value === "string"
            ? value.toLowerCase().includes(searchQuery.toLowerCase())
            : !isNaN(priceSearch) && item.price === priceSearch
        )
      );

      setFilteredItems(filtered);
      setIsFiltered(true);
      setItemsData(filtered);
    }, 500),
    []
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    setSearchItem(searchQuery);
    debounceSearch(searchQuery);
  };
  return (
    <div className="bg-[#E7E8D1] dark:bg-slate-900">
      <Search
        onSort={handleSort}
        searchItem={searchItem}
        onSearch={handleSearch}
      />

      <div className="flex flex-1 flex-col">
        <div className="mt-4">
          <h1 className=" text-black dark:text-[#94a3b8] text-center text-2xl font-bold ">
            {t("title")}
          </h1>
        </div>
        <div className="products-scroll  flex  overflow-y-scroll justify-center flex-wrap px-10 py-4">
          {itemsData &&
            itemsData.map((product) => (
              <Products
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                img={product.images[0]}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
