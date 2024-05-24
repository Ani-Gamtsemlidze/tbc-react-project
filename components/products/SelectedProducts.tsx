"use client";
import Header from "../layout/Header";
import Image from "next/image";
import { IoMdAdd } from "react-icons/io";
import { LuMinus } from "react-icons/lu";

import { deleteProducts, updateCart } from "../../user-api";
import { useState, useEffect } from "react";
import { setCartTotalCookie } from "../../actions";
import CartQuantity from "./CartQuantity";

export default function SelectedProducts({
  productsData,
  initialQuantity,
}: any) {
  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => {
    const quantityTotal: any = Object.values(quantity).reduce(
      (acc: any, cur: any) => acc + cur,
      0
    );
    setCartTotalCookie(quantityTotal);
  }, [quantity]);

  const handleQuantityChange = async (id: number, change: number) => {
    const newQuantity = quantity[id] + change;
    if (newQuantity >= 0) {
      try {
        const response = await updateCart(
          id,
          newQuantity,
          change > 0 ? "increment" : "decrement"
        );
        if (response.msg === "Product quantity changed!") {
          setQuantity((prevQuantity: Record<number, number>) => ({
            ...prevQuantity,
            [id]: newQuantity,
          }));
        } else {
          console.error("Failed to update product quantity:", response.msg);
        }
      } catch (error) {
        console.error("Error updating product quantity:", error);
      }
    }
  };

  const handleDeleteProducts = async () => {
    await deleteProducts(30);
  };

  const sortedProducts = [...productsData].sort(
    (a: any, b: any) => a.id - b.id
  );

  return (
    <div className="bg-slate-300 min-h-screen pl-[220px]">
      <Header />
      <h2 className="text-center pt-4 font-bold text-2xl">Selected Products</h2>
      {productsData.length === 0 ? (
        <p className="font-bold text-center text-2xl pt-4">Cart is Empty</p>
      ) : (
        <ul>
          {sortedProducts.map((product: any, index: number) => (
            <div
              key={`${product.id}-${index}`}
              className="flex max-lg:flex-col items-center justify-between m-8 border p-4 max-lg:p-2 relative max-lg:h-96"
            >
              <div className="flex items-center">
                <div className="w-32 h-32 max-lg:w-full max-lg:h-36">
                  <Image
                    className="w-full h-full object-cover"
                    src={product?.images[0]}
                    alt={product.title}
                    width={300}
                    height={300}
                  />
                </div>
                <li className="ml-4 max-lg:ml-0 max-lg:mt-2">
                  {product.title} - ${product.price}
                </li>
                <CartQuantity quantity={quantity[product?.id]} />
              </div>

              <div className="flex flex-col items-center">
                <div
                  onClick={() => handleQuantityChange(product.id, 1)}
                  className="cursor-pointer"
                >
                  <IoMdAdd />
                </div>
                <div
                  onClick={() => handleQuantityChange(product.id, -1)}
                  className="cursor-pointer mt-2"
                >
                  <LuMinus />
                </div>
              </div>
            </div>
          ))}
          <div
            className="font-bold py-4 ml-8 text-lg cursor-pointer bg-slate-700 text-center w-44 text-white rounded px-4"
            onClick={handleDeleteProducts}
          >
            Clear The Cart
          </div>
        </ul>
      )}
    </div>
  );
}
