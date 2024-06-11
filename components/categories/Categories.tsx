"use client";
import { useEffect, useState } from "react";
import { getCategories } from "../../user-api";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Navigation } from "swiper/modules";

// import "./styles.css";

// import required modules

export default function Categories() {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const recipes = await getCategories();
      console.log(recipes);
      setCategoryData(recipes);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="flex  flex-wrap justify-start  mt-6">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="mySwiper categories_swiper"
      >
        {categoryData.map((category: any) => (
          <SwiperSlide key={category.id}>
            <Link
              href={`/recipes/category/${category.name}`}
              key={category.id}
              className=" bg-[rgb(255,240,218)] w-96 "
            >
              <Image
                className="w-[440px] h-[324px] rounded-2xl object-cover"
                src={category.image}
                width={400}
                height={400}
                alt="recipe image"
              />
              <h1 className="font-bold text-2xl dark:text-mainColor text-[#27343a] uppercase mt-4">
                {category.name}
              </h1>
            </Link>
          </SwiperSlide>
        ))}
        <IoIosArrowForward className=" text-[#035C41] absolute top-[50%] translate-y-[-50%]  bg-white rounded-full w-12 h-12 object-cover z-[1000] right-[48px] " />
        <IoIosArrowBack className=" text-[#035C41] absolute top-[50%] translate-y-[-50%]  bg-white rounded-full w-12 h-12 object-cover z-[1000] left-[24px] " />
      </Swiper>
    </div>
  );
}
