"use client";
import { BsCart } from "react-icons/bs";
import CartQuantity from "./CartQuantity";
import CartItems from "./CartItems";
import { useState } from "react";

export default function ItemBucket() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  function handleOpenCartBox() {
    setIsCartOpen(!isCartOpen);
  }
  return (
    <div className="flex relative" onClick={handleOpenCartBox}>
      <BsCart className="text-3xl cursor-pointer text-[#16442a]" />
      <div>
        <CartQuantity />
      </div>
      <CartItems isCartOpen={isCartOpen} />
    </div>
  );
}
