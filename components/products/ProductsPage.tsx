"use client";

// import { useState } from "react";
// import { Search } from "../search/Search";
import ProductsCard from "./ProductsCard";
import { acme, adamina, oleo } from "../../app/fonts";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
// import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import ProductsCategories from "./ProductsCategories";
import ProductsSearch from "./ProductsSearch";

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
  // cart_total: number;
}

export type SelectedProducts = { [key: number]: number };

export default function ProductsPage({ productsData }: HomePageProps) {
  // const { products } = productsData;

  // const [itemsData] = useState<Product[]>(productsData);
  // const [isSorted, setIsSorted] = useState(false);
  // const [filteredItems, setFilteredItems] = useState<Product[]>([]);
  // const [isFiltered, setIsFiltered] = useState(false);
  // const [searchItem, setSearchItem] = useState("");
  // const handleSort = () => {
  //   setIsSorted(!isSorted);

  //   if (isSorted) {
  //     setItemsData([...products]);
  //   } else {
  //     let sortedItems;
  //     if (isFiltered) {
  //       sortedItems = [...filteredItems].sort((a, b) => a.price - b.price);
  //     } else {
  //       sortedItems = [...itemsData].sort((a, b) => a.price - b.price);
  //     }
  //     setItemsData(sortedItems);
  //   }
  // };

  // const debounce = <Args extends any[]>(
  //   func: (...args: Args) => void,
  //   delay: number
  // ) => {
  //   let timerId: ReturnType<typeof setTimeout>;
  //   return (...args: Args) => {
  //     clearTimeout(timerId);
  //     timerId = setTimeout(() => {
  //       func(...args);
  //     }, delay);
  //   };
  // };

  // const debounceSearch = useCallback(
  //   debounce((searchQuery: string) => {
  //     const priceSearch = Number(searchQuery);

  //     const filtered = itemsData.filter((item) =>
  //       Object.values(item).some((value) =>
  //         typeof value === "string"
  //           ? value.toLowerCase().includes(searchQuery.toLowerCase())
  //           : !isNaN(priceSearch) && item.price === priceSearch
  //       )
  //     );

  //     // setFilteredItems(filtered);
  //     // setIsFiltered(true);
  //     setItemsData(filtered);
  //   }, 500),
  //   []
  // );

  // const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const searchQuery = e.target.value;
  //   // setSearchItem(searchQuery);
  //   debounceSearch(searchQuery);
  // };

  return (
    <div className="flex flex-col  bg-mainBackground dark:bg-gray-700 relative">
      {/* <Search /> */}
      <div className="flex items-center justify-center">
        <h1
          className={`text-center text-7xl my-6 ${oleo.className} text-[#035C41]`}
        >
          <p>Exploring</p>
          Vegan Products
        </h1>
        <ProductsSearch productsData={productsData} />
      </div>
      <div>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          // navigation={true}
          // pagination={{
          //   dynamicBullets: true,
          // }}
          // modules={[Navigation]}
          className="mySwiper products_swiper"
        >
          <SwiperSlide>
            <Image
              className="w-full h-[400px] object-cover"
              src="/images/products_slider/mushroom-meat.jpg"
              alt="slider"
              width={3000}
              height={3000}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="w-full h-[400px] object-cover"
              src="/images/products_slider/slider-4.jpg"
              alt="slider"
              width={3000}
              height={3000}
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <Image
              className="w-full h-[400px] object-cover"
              src="/images/products_slider/slider-2.jpg"
              alt="slider"
              width={3000}
              height={3000}
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="flex justify-center ">
        <div className="mt-24">
          <p className="text-center  text-3xl text-[#035C41] ">Explore</p>
          <h1
            className={`text-center text-7xl ${acme.className} my-6 text-[#035C41]`}
          >
            All Products
          </h1>
        </div>
      </div>
      <div className="flex my-12 ">
        <div className="flex flex-col">
          <div className="ml-8">
            <h1
              className={`font-bold text-[#035C41] text-3xl  ${acme.className} `}
            >
              Categories
            </h1>
            <ul className={`flex flex-col text-xl ${adamina.className}`}>
              <ProductsCategories />
            </ul>
          </div>
        </div>
        <div className="flex flex-1 ml-36">
          <ProductsCard data={productsData} />
          <ProductsCard data={productsData} />
        </div>
      </div>
    </div>
  );
}
