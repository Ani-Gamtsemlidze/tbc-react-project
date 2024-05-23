"use client";

import { useState, useCallback } from "react";
import { Search } from "../search/Search";
import ProductsCard from "./ProductsCard";

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
  cart_total: number;
  cart_total: number;
}

export type SelectedProducts = { [key: number]: number };

export default function ProductsPage({
  productsData,
  cart_total,
}: HomePageProps) {
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

  return (
    <div className="bg-[#E7E8D1] dark:bg-slate-900">
      <Search
        onSort={handleSort}
        searchItem={searchItem}
        onSearch={handleSearch}
        total={cart_total}
        total={cart_total}
      />

      <div className="flex flex-1 flex-col">
        <ProductsCard itemsData={itemsData} />
      </div>
    </div>
  );
}
