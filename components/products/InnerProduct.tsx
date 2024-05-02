import React from "react";
import { CarouselItems } from "../carousel/Carousel";

interface InnerProductData {
  title: string;
  category: string;
  rating: number;
  price: number;
  description: string;
  thumbnail: string;
  images: string[];
}

interface InnerProductProps {
  innerProductData: InnerProductData;
}

const InnerProduct: React.FC<InnerProductProps> = ({ innerProductData }) => {
  return (
    <div className="h-screen  bg-gray-200 dark:bg-slate-500 flex justify-center items-center">
      {innerProductData && (
        <div className="flex justify-center ">
          <CarouselItems imagesData={innerProductData} />
          <div className="ml-6">
            <h1 className="text-black text-xl font-bold">
              {innerProductData.title}
              <span className="text-black text-sm font-bold ml-2">
                ({innerProductData.category})
              </span>
            </h1>
            <div className="flex m-auto bg-gray-300 rounded-lg w-60 justify-between my-6 p-2 object-left">
              <p className="font-bold">{innerProductData.rating}</p>
              <p className="text-gray-900 font-bold">
                ${innerProductData.price}
              </p>
            </div>
            <div className="w-96 border-t border-gray-300 py-2">
              <p className="font-bold">{innerProductData.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { InnerProduct };
