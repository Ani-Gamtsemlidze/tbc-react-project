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
import { Navigation } from "swiper/modules";
// import { Pagination } from "swiper/modules";

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
    <div className="flex ml-4 flex-wrap justify-start dark:bg-gray-700 mt-6">
      <Swiper
        slidesPerView={4}
        spaceBetween={5}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {categoryData.map((category: any) => (
          <SwiperSlide key={category.id}>
            <Link
              href={`/recipes/category/${category.name}`}
              key={category.id}
              className="ml-4"
            >
              <Image
                className="w-[400px] h-[324px] rounded-2xl object-cover"
                src={category.image}
                width={400}
                height={400}
                alt="recipe image"
              />
              <h1 className="font-bold text-2xl text-[#27343a] uppercase mt-4">
                {category.name}
              </h1>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
