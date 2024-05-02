"use client";
import { Carousel } from "@material-tailwind/react";
// export type slideRef = React.Ref<HTMLDivElement>;

import Image from "next/image";

// type NavigationType = (args: {
//   setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
//   activeIndex: number;
//   length: number;
// }) => React.ReactNode | void;

export function CarouselCustomNavigation() {
  const navigation = ({ setActiveIndex, activeIndex, length }) => (
    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
      {new Array(length).fill("").map((_, i) => (
        <span
          key={i}
          className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
            activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
          }`}
          onClick={() => setActiveIndex(i)}
        />
      ))}
    </div>
  );

  return (
    <Carousel className="" navigation={navigation}>
      <Image
        src="/images/slider/slider-2.jpg"
        width={400}
        height={400}
        quality={100}
        alt="image 2"
        className="h-full w-full object-cover object-center"
      />
      <Image
        src="/images/slider/slider-4.jpg"
        width={400}
        height={400}
        alt="image 1"
        className="h-full w-full object-cover object-center"
      />
      <Image
        src="/images/slider/slider-3.jpg"
        width={400}
        height={400}
        alt="image 3"
        className="h-full w-full object-cover object-center"
      />
    </Carousel>
  );
}
