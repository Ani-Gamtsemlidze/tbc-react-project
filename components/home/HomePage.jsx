"use client";
import Search from "@/components/search/Search";
import Products from "../products/Products";
import { useCallback, useState } from "react";

export default function HomePage({ productsData }) {
  const { products } = productsData;
  const [itemsData, setItemsData] = useState(products);
  const [isSorted, setIsSorted] = useState(false);

  const [filteredItems, setFilteredItems] = useState([]);

  const [isFiltered, setIsFiltered] = useState(false);

  const [searchItem, setSearchItem] = useState("");

  const handleSort = () => {
    setIsSorted(!isSorted);
  
    if(isSorted) {
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
  

  const debounce = (func, delay) => {
    let timerId;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const debounceSearch = useCallback(
    debounce((searchQuery) => {
      const priceSearch = Number(searchQuery);

      const filtered = itemsData.filter((item) =>
        Object.values(item).some((value) =>
          typeof value === "string"
            ? value
                .toLocaleLowerCase()
                .includes(searchQuery.toLocaleLowerCase())
            : !isNaN(priceSearch) && item.price === priceSearch
        )
      );

      setFilteredItems(filtered);
      setIsFiltered(true);
      setItemsData(filtered);
    }, 500),
    []
  );

  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    setSearchItem(searchQuery);
    debounceSearch(searchQuery);
  };

  return (
    <>
      <Search
        onSort={handleSort}
        searchItem={searchItem}
        onSearch={handleSearch}
      />

      <div className="flex flex-1 flex-col bg-gray-200 ">
        <div className="my-2">
          <h1 className="text-center text-2xl">PRODUCTS</h1>
        </div>
        <div className="products-scroll px-4 flex  overflow-y-scroll justify-start  flex-wrap">
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
    </>
  );
}
