"use client";

import { useState, useCallback, useReducer, useEffect } from "react";
import { useTranslations } from "next-intl";
import Search from "../search/Search";
import ProductsCard from "./ProductsCard";
import { useLocalStorage } from "../../hooks";
import { initialState, reducer } from "../../reducers";

export interface Product {
  id: number;
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

export type SelectedProducts = { [key: number]: number };

export default function ProductsPage({ productsData }: HomePageProps) {
  const t = useTranslations("Header");
  const { products } = productsData;

  const [storedValue, setStoredValue] = useLocalStorage(
    "selectedProducts",
    initialState
  );

  const [selectedProducts, dispatch] = useReducer(
    reducer,
    storedValue || initialState
  );

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

  useEffect(() => {
    if (storedValue !== undefined) {
      setStoredValue(selectedProducts);
    }
  }, [selectedProducts, setStoredValue]);

  const handleClick = (productsData: Product) => {
    dispatch({ type: "INCREMENT", payload: productsData.id });
  };

  const selectedNumber = Object.values(selectedProducts).reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  return (
    <div className="bg-[#E7E8D1] dark:bg-slate-900">
      <Search
        onSort={handleSort}
        searchItem={searchItem}
        onSearch={handleSearch}
        selectedNum={selectedNumber}
      />

      <div className="flex flex-1 flex-col">
        <div className="mt-4">
          <h1 className=" text-black dark:text-[#94a3b8] text-center text-2xl font-bold ">
            {t("title")}
          </h1>
        </div>
        <ProductsCard itemsData={itemsData} handleClick={handleClick} />
      </div>
    </div>
  );
}
