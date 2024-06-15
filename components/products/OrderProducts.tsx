"use client";
import { useEffect, useState } from "react";
import { getProduct } from "../../user-api";
import Image from "next/image";

export default function OrderProducts({ products }: any) {
  const productsArray = products[0].products;
  console.log(productsArray);
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const parsedProducts = productsArray.map((item: any) => JSON.parse(item));

  const fetchProducts = async () => {
    try {
      const productsId = parsedProducts.map(
        (product: any) => product.product_id
      );

      const promises = productsId.map((productId: any) =>
        getProduct(productId)
      );
      const productsPromise = await Promise.all(promises);
      const products = productsPromise.flat();

      const combinedProducts = products.map((product: any) => {
        const matchedProduct = parsedProducts.find(
          (p: any) => p.product_id === product.id
        );
        return {
          ...product,
          quantity: matchedProduct ? matchedProduct.quantity : 1,
        };
      });

      setProductsData(combinedProducts as any);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  console.log(productsData);

  return (
    <>
      {productsData.map((product: any, index: any) => (
        <section
          key={index}
          className="mx-2 my-10  max-w-screen-lg w-[1000px] rounded-md border border-gray-100 text-gray-700 shadow-md md:mx-auto"
        >
          <div className="flex flex-col  md:flex-row">
            <div className="mx-auto hidden items-center px-5 md:flex md:p-8">
              <Image
                className="rounded-md shadow-lg w-24 h-24 object-cover"
                src={product.images[2]}
                alt="Shop image"
                width={200}
                height={200}
              />
            </div>
            <div className="p-5 md:w-4/6 md:p-8 ">
              <span className="rounded-md bg-[#e895d0] px-4 py-2 text-xs uppercase text-white">
                Order: #{Math.floor(Math.random() * 16777215).toString(16)}
              </span>
              <span className="rounded-md bg-[#e895d0] mx-4 px-4 py-2 text-xs uppercase text-white">
                Quantity: {product.quantity}
              </span>
              <span className="rounded-md bg-[#e895d0] px-4 py-2 text-xs uppercase text-white">
                Total Price: ${product.price * product.quantity}
              </span>
              <p className="mt-2 text-xl font-black md:mt-6 md:text-4xl">
                {product.title}
                <span className="text-lg ml-2">${product.price}</span>
              </p>
              <p className="mt-3 text-gray-600">{product.description}</p>

              <button className="mt-4 mr-2 flex items-center justify-center rounded-md bg-greenColor px-8 py-2 text-center text-white duration-150 md:mb-4 hover:translate-y-1 hover:bg-sky-500">
                Cancel Order
              </button>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
