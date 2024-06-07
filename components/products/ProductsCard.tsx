"use client";
import Image from "next/image";
// import { useRouter } from "next/navigation";
// import Cart from "./Cart";
// import { addToCartAction } from "../../actions";
import Link from "next/link";
import React from "react";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// // import required modules
// import { Navigation } from "swiper/modules";

// interface Product {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   images: string[];
// }

// interface ProductsCardProps {
//   itemsData: Product[];
// }

export default function ProductsCard({ data }: any) {
  console.log("ITEMSDATA", data);
  // const addProduct = async (productId: number) => {
  //   await addToCartAction(productId);
  // };

  // const router = useRouter();
  return (
    <div className=" ml-8 group  flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      {data &&
        data.map((product: any) => (
          <div key={product.id}>
            {/* <div className="bg-[#E895D0] min-w-24 rounded-2xl  mt-4 py-2  ">
              <p className="text-[#27343A] text-center">{product.categories}</p>
            </div> */}
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
                className="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0"
                src={product.images[0]}
                alt="product image"
                width={400}
                height={400}
              />

              <div className="absolute bg-[#035C41] top-0 left-0 m-2 rounded-full px-4 py-2  text-center text-sm font-medium text-white">
                Veggie 100%
                {/* <Image
                  className="w-24 h-24 object-cover rounded-full"
                  src="/images/circle.jpg"
                  alt="product image"
                  width={400}
                  height={400}
                /> */}
              </div>
            </Link>
            <div className="mt-4 px-5 pb-5">
              <Link href={`/products/${product.id}`}>
                <h5 className="text-xl tracking-tight text-slate-900">
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
              <Link
                href="#"
                className="flex items-center justify-center rounded-md bg-[#035C41] dark:bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#23493e] focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Add to cart
              </Link>
            </div>
          </div>
        ))}
    </div>

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
    //             <Cart addProduct={() => addProduct(product.id)} />
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    // </div>
  );
}
{
  /* <svg
          className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 32 32"
        >
          <path
            fill="currentColor"
            d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z"
          />
        </svg> */
}
