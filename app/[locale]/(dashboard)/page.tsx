// import { getSession } from "@auth0/nextjs-auth0";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { oleo } from "../../fonts";
// import Image from "next/image";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Autoplay } from "swiper/modules";

import { Metadata } from "next";
import Categories from "../../../components/categories/Categories";
// import RandomQuoteGenerator from "../../../components/home/RandomQuote";
import ProductsSlider from "../../../components/products/ProductsSlider";
import { oleo } from "../../fonts";

export const metadata: Metadata = {
  title: "Discover the Vegan Lifestyle at Veggie Vibes",
  description:
    "Explore vegan products, trending categories, and delicious recipes at Veggie Vibes",
};

export default async function Home() {
  return (
    <div className="bg-mainColor dark:bg-slate-500 ">
      <div className="flex items-end justify-end mr-4 mt-8 ">
        {/* <RandomQuoteGenerator /> */}
      </div>
      <h1
        className={` text-7xl my-24 ${oleo.className} text-center dark:text-mainColor text-[#035C41]`}
      >
        <p>Exploring</p>
        Vegan Lifestyle
      </h1>
      <ProductsSlider />
      <p>Vegan highlits</p>
      <p>Slider</p>
      <h1
        className={` text-7xl my-24 ${oleo.className} text-center dark:text-mainColor text-[#035C41]`}
      >
        <p>Trending</p>
        Vegan Categories
      </h1>
      <Categories />
      <h1
        className={` text-7xl my-24 ${oleo.className} text-center dark:text-mainColor text-[#035C41]`}
      >
        <p>Recipes </p>
        of the month
      </h1>
    </div>
  );
}
