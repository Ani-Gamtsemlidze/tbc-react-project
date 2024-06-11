"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
export default function ProductsSlider() {
  return (
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
  );
}
