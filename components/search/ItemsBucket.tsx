"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

const ItemsBucket = () => {
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    fetch("/api/addToCart")
      .then((response) => response.json())
      .then((data) => {
        setCartTotal(data.cartTotal.value);
      })
      .catch((error) => {
        console.error("Error fetching cart total:", error);
      });
  }, []);

  return (
    <Link href="/checkout" className="flex relative">
      <IoCartOutline className="w-6 h-6 text-black ml-4 object-cover cursor-pointer" />
      <span className="absolute bottom-4 right-[-8px] text-black">
        {cartTotal}
      </span>
    </Link>
  );
};

export default ItemsBucket;
