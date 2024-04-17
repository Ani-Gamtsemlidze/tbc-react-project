"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Products({ title, description, img, price, id }) {
  const router = useRouter();

  return (
    <div className=" bg-white rounded-md mx-2 my-2 flex flex-col grow-0 shrink-0 basis-[32%] ">
      <div className="w-full h-52">
        <Image
          className="w-full  h-full object-cover"
          src={img}
          alt={title}
          width={256}
          height={192}
        />
      </div>
      <div className="px-4">
        <div className="my-4">
          <h1 className="text-xl font-bold">{title}</h1>
        </div>
        <div className="mb-3">
          <p className="text-sm">{description.slice(0, 180)}...</p>
        </div>
        <span className="text-sm font-bold">Price: ${price}</span>
      </div>
      <div className="  my-4 w-32">
        <button
          onClick={() => router.push(`/${id}`)}
          className="rounded py-2 mx-2 px-2  hover:bg-gray-200 text-black font-bold flex flex-start cursor-pointer transition"
        >
          View More
        </button>
      </div>
    </div>
  );
}
