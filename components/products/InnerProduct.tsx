"use client";
import React, { useEffect, useState } from "react";
import { monda, oleo } from "../../app/fonts";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { IoMdShare } from "react-icons/io";

import { Swiper as SwiperClass } from "swiper/types";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";
import { HiMiniStar } from "react-icons/hi2";

import { addToCart, getAverageRating } from "../../products-api/products-api";
import { useCart } from "../../app/context/CartContext";
import { useUser } from "@auth0/nextjs-auth0/client";
import AddToCart from "./AddToCart";

interface Nutrients {
  fat: number;
  protein: number;
  calories: number;
  carbohydrates: number;
}

interface InnerProductData {
  id: number;
  title: string;
  categories: string;
  images: string[];
  price: number;
  description: string;
  ingredients: string[];
  nutrients: Nutrients;
}

interface InnerProductProps {
  innerProductData: InnerProductData;
}

export default function InnerProduct({ innerProductData }: InnerProductProps) {
  const { fetchCartData } = useCart();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [averageRatings, setAverageRatings] = useState<{
    [productId: number]: number;
  }>({});
  const { user } = useUser();

  useEffect(() => {
    const fetchInitialAverageRatings = async () => {
      const initialAverageRatings: { [productId: number]: number } = {};
      // for (const product of innerProductData) {
      const avgRating = await getAverageRating(innerProductData.id);
      console.log(avgRating, "RATING");
      initialAverageRatings[innerProductData.id] = avgRating;
      // }
      setAverageRatings(initialAverageRatings);
    };

    fetchInitialAverageRatings();
  }, [innerProductData]);

  const handleAddToCart = async (productId: number) => {
    if (!user) {
      console.error("User not authenticated");
      return;
    }

    try {
      const quantity = 1;

      const result = await addToCart(user!.sub!, productId, quantity);
      console.log("DATAID", innerProductData);
      fetchCartData();
      console.log("Product added to cart:", result);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };
  console.log(innerProductData);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  console.log(
    typeof averageRatings[innerProductData.id],
    averageRatings[innerProductData.id]
  );
  // const { handleDropDown } = useDropdown();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex flex-col  w-full  bg-mainColor dark:bg-slate-500  ">
      {innerProductData && (
        <div className="flex flex-col">
          <h1
            className={` text-7xl my-24 ${oleo.className} text-center text-[#035C41]`}
          >
            <p>Exploring</p>
            Vegan Products
          </h1>
          <div className="flex max-w-[1200px] pt-0 px-3 mx-auto pb-8">
            <div className=" w-full max-w-[600px]">
              <Swiper
                // style={{
                //   "--swiper-navigation-color": "#fff",
                //   "--swiper-pagination-color": "#fff",
                // }}
                spaceBetween={10}
                navigation={false}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                <SwiperSlide>
                  <Image
                    src={innerProductData.images[0]}
                    alt={innerProductData.title}
                    width={600}
                    height={600}
                    className="w-52  h-52   object-cover rounded hover:transform hover:scale-105 transition-transform duration-300"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={innerProductData.images[1]}
                    alt={innerProductData.title}
                    width={600}
                    height={600}
                    className="w-52  h-52   object-cover rounded hover:transform hover:scale-105 transition-transform duration-300"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={innerProductData.images[2]}
                    alt={innerProductData.title}
                    width={600}
                    height={600}
                    className="w-52  h-52   object-cover rounded hover:transform hover:scale-105 transition-transform duration-300"
                  />
                </SwiperSlide>
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiperThumb"
              >
                <SwiperSlide>
                  <Image
                    src={innerProductData.images[0]}
                    alt={innerProductData.title}
                    width={384}
                    height={384}
                    className="w-52  h-52   object-cover rounded hover:transform hover:scale-105 transition-transform duration-300"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={innerProductData.images[1]}
                    alt={innerProductData.title}
                    width={384}
                    height={384}
                    className="w-52  h-52   object-cover rounded hover:transform hover:scale-105 transition-transform duration-300"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={innerProductData.images[2]}
                    alt={innerProductData.title}
                    width={384}
                    height={384}
                    className="w-52  h-52   object-cover rounded hover:transform hover:scale-105 transition-transform duration-300"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div>
              <div className="ml-12 ">
                <div className=" mt-4 flex items-center">
                  <div className="bg-[#035C41] max-w-60 px-6 rounded-2xl   py-2   ">
                    <p className="text-white text-center">
                      {innerProductData.categories}
                    </p>
                  </div>
                  <div className="relative">
                    <IoMdShare
                      className="text-3xl ml-4 text-greenColor cursor-pointer"
                      onClick={toggleDropdown}
                    />
                    <div className="">
                      {isDropdownOpen && (
                        <div className="absolute flex justify-center right-[50%] translate-x-[50%] mt-4 w-48 bg-white rounded-lg shadow-lg border border-gray-200 divide-y divide-gray-200 z-10">
                          <div className="p-2">
                            <FacebookShareButton
                              url={`https://example.com/products/${innerProductData.id}`}
                              title={innerProductData.title}
                            >
                              <FacebookIcon size={32} round />
                            </FacebookShareButton>
                          </div>
                          <div className="p-2">
                            <TwitterShareButton
                              url={`https://example.com/products/${innerProductData.id}`}
                              title={innerProductData.title}
                            >
                              <TwitterIcon size={32} round />
                            </TwitterShareButton>
                          </div>
                          <div className="p-2">
                            <LinkedinShareButton
                              url={`https://example.com/products/${innerProductData.id}`}
                              title={innerProductData.title}
                              summary={innerProductData.description}
                            >
                              <LinkedinIcon size={32} round />
                            </LinkedinShareButton>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="ml-3 flex items-center">
                    <HiMiniStar className="text-3xl mr-2 text-greenColor" />
                    <p className="text-2xl text-gray-500">
                      {averageRatings[innerProductData.id] !== undefined
                        ? Number(averageRatings[innerProductData.id]).toFixed(2)
                        : "No ratings yet"}
                    </p>
                  </div>
                </div>
                <h1
                  className={`text-7xl font-bold  mt-8 w-[700px] text-[#035C41] leading-snug	 ${monda.className}`}
                >
                  {innerProductData.title}
                </h1>
                <p className="text-2xl mt-4 ">$ {innerProductData.price}</p>
                <p className="text-2xl mt-4 ">{innerProductData.description}</p>
              </div>
              <div className="flex pl-12">
                <div className="flex flex-col items-start ml-10  w-full ">
                  <div className="flex  w-full items-center justify-between">
                    <div className="my-8">
                      <h2 className={`font-bold text-2xl ${monda.className} `}>
                        Ingredients:
                      </h2>
                      <ul className="list-disc list-inside text-left mt-6">
                        {innerProductData.ingredients.map(
                          (ingredient, index) => (
                            <li
                              key={index}
                              className="text-xl leading-relaxed font-bold "
                            >
                              {ingredient}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                    <div className="mr-12">
                      <h2 className={`font-bold text-2xl ${monda.className}`}>
                        Nutrients:
                      </h2>
                      <ul className="list-disc list-inside text-left mt-6">
                        <li className="text-xl leading-relaxed font-bold">
                          Fat: {innerProductData?.nutrients?.fat}g
                        </li>
                        <li className="text-xl leading-relaxed font-bold">
                          Protein: {innerProductData?.nutrients?.protein}g
                        </li>
                        <li className="text-xl leading-relaxed font-bold">
                          Calories: {innerProductData?.nutrients?.calories}kcal
                        </li>
                        <li className="text-xl leading-relaxed font-bold">
                          Carbohydrates:{" "}
                          {innerProductData?.nutrients?.carbohydrates}g
                        </li>
                      </ul>
                    </div>
                  </div>
                  <AddToCart
                    addProduct={() => handleAddToCart(innerProductData.id)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
