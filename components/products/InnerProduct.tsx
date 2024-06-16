"use client";
import React, { useState } from "react";
import { monda, oleo } from "../../app/fonts";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import { IoMdShare } from "react-icons/io";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";
import { addToCart } from "../../products-api/products-api";
import { useCart } from "../../app/context/CartContext";
import { useUser } from "@auth0/nextjs-auth0/client";
import Cart from "./Cart";

// import useDropdown from "../../hooks";

// export interface InnerProductData {
//   title: string;
//   category: string;
//   rating: number;
//   price: number;
//   description: string;
//   thumbnail: string;
//   images: string[];
// }

// interface InnerProductProps {
//   innerProductData: InnerProductData;
// }

export default function InnerProduct({ innerProductData }: any) {
  const { fetchCartData } = useCart();
  const { user } = useUser();

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
          <div className="flex ">
            <div className="flex flex-col justify-center my-8 ml-12">
              <Image
                src={innerProductData.images[1]}
                alt={innerProductData.title}
                width={384}
                height={384}
                className="w-52  h-52   object-cover rounded hover:transform hover:scale-105 transition-transform duration-300"
              />
              <Image
                src={innerProductData.images[0]}
                alt={innerProductData.title}
                width={384}
                height={384}
                className="w-52  h-52   object-cover rounded mt-3 hover:transform hover:scale-105 transition-transform duration-300 "
              />
            </div>
            <div className=" ml-6 hover:transform hover:scale-105 transition-transform duration-300 bg-[#c6a4e3] w-[570px] h-[682px] rounded-2xl flex items-center justify-center">
              <Image
                src={innerProductData.images[1]}
                alt={innerProductData.title}
                width={384}
                height={384}
                className="w-[420px] h-[500px] object-cover rounded-2xl "
              />
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
                    <div className="mt-8">
                      <h2 className={`font-bold text-2xl ${monda.className} `}>
                        Ingredients:
                      </h2>
                      <ul className="list-disc list-inside text-left mt-6">
                        {innerProductData.ingredients.map(
                          (ingredient: string[], index: number) => (
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
                        <li className="text-xl  leading-relaxed  font-bold">
                          Fat: {innerProductData.nutrients.fat}g
                        </li>
                        <li className="text-xl  leading-relaxed  font-bold">
                          Protein: {innerProductData.nutrients.protein}g
                        </li>
                        <li className="text-xl  leading-relaxed  font-bold">
                          Calories: {innerProductData.nutrients.calories}kcal
                        </li>
                        <li className="text-xl  leading-relaxed  font-bold">
                          Carbohydrates:{" "}
                          {innerProductData.nutrients.carbohydrates}g
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Cart
                    addProduct={() => handleAddToCart(innerProductData.id)}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <ImagesPreview innerProductData={innerProductData} /> */}
        </div>
      )}
    </div>
  );
}
