"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Cart from "./Cart";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useCart } from "../../app/context/CartContext";
import { addToCart } from "../../user-api";
import { useAdmin } from "../../app/context/AdminContext";
// import { AiFillEdit } from "react-icons/ai";
import { HiDotsHorizontal } from "react-icons/hi";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}

interface ProductsCardProps {
  data: Product[];
}

export default function ProductsCard({ data }: ProductsCardProps) {
  console.log(data);
  const { user } = useUser();
  const { fetchCartData } = useCart();
  const { isAdmin } = useAdmin();

  const handleAddToCart = async (productId: number) => {
    if (!user) {
      console.error("User not authenticated");
      return;
    }

    try {
      const quantity = 1;

      const result = await addToCart(user!.sub!, productId, quantity);
      console.log("DATAID", data);
      fetchCartData();
      console.log("Product added to cart:", result);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-6 ml-8 max-w-[700px]">
      {data &&
        data.map((product) => (
          <div className="border-gray-400 border rounded-md" key={product.id}>
            <Link
              className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
              href={`/products/${product.id}`}
            >
              <Image
                className="peer absolute top-0 right-0 w-full h-full object-cover"
                src={product.images[2]}
                alt="product image"
                width={400}
                height={400}
              />
              <Image
                className="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-700 hover:right-0 peer-hover:right-0"
                src={product.images[0]}
                alt="product image"
                width={400}
                height={400}
              />

              <div className="absolute bg-[#035C41] top-0 left-0 m-2 rounded-full px-4 py-2 text-center text-sm font-medium text-white">
                Veggie 100%
              </div>
            </Link>
            <div className="mt-4 px-5 pb-5">
              <Link href={`/products/${product.id}`}>
                <h5 className="text-xl tracking-tight text-slate-900">
                  {product.title}
                </h5>
              </Link>
              <p className="text-dm text-slate-900 my-4">
                {product.description.slice(0, 180)}...
              </p>

              <div className="mt-2 mb-5 flex items-center justify-between">
                <p>
                  <span className="text-3xl font-bold text-slate-900">
                    ${product.price}
                  </span>
                </p>
              </div>
              <div className="flex items-center justify-between">
                <Cart addProduct={() => handleAddToCart(product.id)} />
                {isAdmin && (
                  <HiDotsHorizontal className="text-2xl text-greenColor font-bold" />
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
