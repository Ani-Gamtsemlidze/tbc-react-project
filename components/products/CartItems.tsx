"use client";
import { useEffect, useState } from "react";
import { getCarts, getProduct } from "../../user-api";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

interface CartItem {
  product_id: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
}

export default function CartItems({ isCartOpen }: any) {
  const [cartData, setCartData] = useState<CartItem[]>([]);
  const [productsData, setProductsData] = useState<Product[]>([]);
  const { user } = useUser();

  useEffect(() => {
    if (isCartOpen) {
      fetchCartData();
    }
  }, [isCartOpen]);

  const fetchCartData = async () => {
    try {
      const cart = await getCarts(user!.sub!);
      setCartData(cart);
      if (cart.length > 0) {
        fetchProducts();
      }
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  const productsId = cartData.map((product) => product.product_id);

  const fetchProducts = async () => {
    try {
      const promises = productsId.map(async (productId) => {
        return getProduct(productId);
      });

      const productsArray = await Promise.all(promises);

      const products = productsArray.flat();

      console.log("PRODUCTS", products);
      setProductsData(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    isCartOpen && (
      <div className="bg-[rgba(0,0,0,0.7)] flex h-screen top-0 w-screen right-0 z-50 fixed">
        <div className="bg-white w-[600px] h-[700px] top-6 right-6 z-50 absolute">
          {productsData.map((product, index) => (
            <div
              className="flex items-center mx-12 w-full my-4 transition hover:bg-[rgb(244,244,244)] rounded-lg"
              key={index}
            >
              <div className="items-start">
                <Image
                  className="w-20 h-20 object-cover rounded-lg"
                  src={product.images[2]}
                  alt="image"
                  width={400}
                  height={400}
                />
              </div>
              <h1 className="text-[#16442a] font-bold text-xl ml-4">
                {product.title}
              </h1>
              <p className="text-black text-xl border-l ml-3 pl-3">
                {product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  );
}
