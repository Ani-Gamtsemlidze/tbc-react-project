"use client";
import Image from "next/image";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Image
          src="/images/slider/slider-2.jpg"
          className="w-full h-96 object-cover"
          text="First slide"
          width={400}
          height={400}
          alt="slider"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="/images/slider/slider-1.jpg"
          className="w-full h-96 object-cover"
          text="First slide"
          width={400}
          height={400}
          alt="slider"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="/images/slider/slider-3.jpg"
          className="w-full h-96 object-cover"
          text="First slide"
          width={400}
          height={400}
          alt="slider"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
