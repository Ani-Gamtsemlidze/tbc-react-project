"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Products({ title, description, img, price, id }) {
  const router = useRouter();

  return (
    <div className="mx-2 my-6 flex flex-col grow-0 shrink-0 basis-1/5 ">
      <div className="w-64 h-48">
        <Image
          className="w-full  h-full object-cover rounded"
          src={img}
          alt={title}
          width={256}
          height={192}
        />
      </div>
      <div className="my-4">
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <p className="  text-sm">{description.slice(0, 180)}...</p>
      <p className="  text-sm font-bold mt-4">Price: ${price}</p>
      <button
        onClick={() => router.push(`/${id}`)}
        className="bg-slate-300 hover:bg-slate-400 rounded px-2.5 py-1 flex mt-6 w-28 flex-start cursor-pointer transition"
      >
        View More
      </button>
    </div>
  );
}
