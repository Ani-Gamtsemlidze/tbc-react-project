"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { addToCart } from "../../user-api";
import Cart from "./Cart";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function ProductsCard({ data }: any) {
  const { user } = useUser();

  console.log(user?.sub, "DATAAA");

  const handleAddToCart = async (productId: number) => {
    try {
      const quantity = 1;

      const result = await addToCart(user!.sub!, productId, quantity);
      console.log("DATAID", data);
      console.log("Product added to cart:", result);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };
  return (
    <div className=" grid grid-cols-2 gap-6 ml-8 w-full">
      {data &&
        data.map((product: any) => (
          <div className="" key={product.id}>
            <Link
              className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
              href={`/products/${product.id}`}
            >
              <Image
                className="peer absolute top-0 right-0 h-full w-full object-cover"
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

              <div className="absolute bg-[#035C41] top-0 left-0 m-2 rounded-full px-4 py-2  text-center text-sm font-medium text-white">
                Veggie 100%
              </div>
            </Link>
            <div className="mt-4 px-5 pb-5">
              <Link href={`/products/${product.id}`}>
                <h5 className="text-xl tracking-tight  text-slate-900">
                  {product.title}
                </h5>
              </Link>
              <p className="tex-dm text-slate-900 my-4">
                {product.description.slice(0, 180)}...
              </p>

              <div className="mt-2 mb-5 flex items-center justify-between">
                <p>
                  <span className="text-3xl font-bold text-slate-900">
                    ${product.price}
                  </span>
                </p>
              </div>
              <Cart addProduct={() => handleAddToCart(product.id)} />
            </div>
          </div>
        ))}
    </div>
  );
}

// <div className="products-scroll flex justify-center flex-wrap px-10 py-4">
//   {itemsData &&
//     itemsData.map((product: any) => (
//       <div key={product.id} className="flex grow-0 shrink-0 basis-[27%]">
//         <div className=" border-2 dark:bg-slate-700 rounded-md  mr-4 my-2">
//           <div className="w-80 h-52">
//             <Image
//               className="w-full h-full object-cover rounded"
//               src={product.images[2]}
//               alt={product.title}
//               width={200}
//               height={200}
//             />
//           </div>
//           <div className="w-80">
//             <div className="px-4 dark:text-[#94a3b8]">
//               <div className="my-4">
//                 <h1 className="text-xl font-bold text-[#141414]">
//                   {product.title}
//                 </h1>
//                 <span className="text-sm font-bold">
//                   Price: ${product.price}
//                 </span>
//               </div>
//               <div className="mb-3">
//                 <p className="text-sm text-black">
//                   {product.description.slice(0, 180)}...
//                 </p>
//               </div>
//             </div>
//             <div className="my-4 w-32">
//               <button
//                 onClick={() => router.push(`products/${product.id}`)}
//                 className="rounded py-2 mx-2 px-2  text-[#B85042] dark:text-[#e2e8f0] font-bold flex flex-start cursor-pointer transition"
//               >
//                 View More
//               </button>
//             </div>
// <Cart addProduct={() => addProduct(product.id)} />
//           </div>
//         </div>
//       </div>
//     ))}
// </div>
