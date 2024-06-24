"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { oleo } from "../../app/fonts";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ProductsSlider() {
  const t = useTranslations("HomeSlider");
  return (
    <div>
      <h1
        className={` text-7xl my-16 ${oleo.className}  leading-tight text-center dark:text-mainColor text-[#035C41]`}
      >
        <p>{t("exploring")}</p>
        {t("lifeStyle")}
      </h1>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper products_swiper w-full"
      >
        <SwiperSlide>
          <Link href={`${process.env.BASE_URL}/products`}>
            <Image
              className="w-full h-[400px] object-cover"
              src="/images/products_slider/mushroom-meat.jpg"
              alt="slider"
              width={3000}
              height={3000}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={`${process.env.BASE_URL}/products`}>
            <Image
              className="w-full h-[400px] object-cover"
              src="/images/products_slider/slider-4.jpg"
              alt="slider"
              width={3000}
              height={3000}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="">
          <Link href={`${process.env.BASE_URL}/products`}>
            <Image
              className="w-full h-[400px] object-cover"
              src="/images/products_slider/slider-2.jpg"
              alt="slider"
              width={3000}
              height={3000}
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
