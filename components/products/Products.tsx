"use client";

interface Product {
  title: string;
  description: string;
  img: string;
  price: number;
  id: string;
}

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Products({
  title,
  description,
  img,
  price,
  id,
}: Product) {
  const router = useRouter();

  return (
    <div className="w-96 border-[hsl(7,47%,49%)] border-2 dark:bg-slate-700 rounded-md flex  grow-0 shrink-0 basis-[30%] mr-4 my-2  ">
      <div className="w-80 h-80">
        <Image
          className="w-full  h-full object-cover rounded"
          src={img}
          alt={title}
          width={200}
          height={200}
        />
      </div>
      <div className="w-80">
        <div className="  px-4 dark:text-[#94a3b8]">
          <div className="my-4 ">
            <h1 className="text-xl font-bold   text-[#94a3b8]">{title}</h1>
            <span className="text-sm font-bold">Price: ${price}</span>
          </div>
          <div className="mb-3">
            <p className="text-sm text-black">{description.slice(0, 180)}...</p>
          </div>
        </div>
        <div className="  my-4 w-32">
          <button
            onClick={() => router.push(`/${id}`)}
            className="rounded py-2 mx-2 px-2  hover:border hover:border-[#B85042] text-[#B85042] dark:text-[#e2e8f0] dark:hover:bg-slate-800 font-bold flex flex-start cursor-pointer transition"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
}
