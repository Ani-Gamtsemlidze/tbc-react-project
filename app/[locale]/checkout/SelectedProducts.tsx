"use client";

import Header from "../../../components/layout/Header";
// import { getUserCart } from "../../../user-api";

// interface SelectedProductsProps {
//   ids: number[];
// }

// const userId = 28;

export default async function SelectedProducts() {
  // const cart = await getUserCart(userId);

  // console.log(cart);
  return (
    <div className="bg-slate-300 min-h-screen pl-[220px] ">
      <Header />
      <h2 className="text-center pt-8 text-2xl font-bold">Selected Products</h2>
      {/* 
        <ul>
          {products.map((product: any, index: number) => (
            <div
              key={`${product.id}-${index}`}
              className="flex max-lg:flex-col items-center justify-between m-8 border p-4 max-lg:p-2 relative max-lg:h-96"
            >
              <div className="flex  items-center ">
                <div className="w-32 h-32 max-lg:w-full max-lg:h-36 ">
                  <Image
                    className="w-full h-full object-cover"
                    src={product?.images[0]}
                    alt={product.title}
                    width={300}
                    height={300}
                  />
                </div>
                <li className="ml-4 max-lg:ml-0 max-lg:mt-2 ">
                  {product.title} - ${product.price}
                </li>
                <span className="ml-4">
                  selected Items:{selectedProducts[product.id]}
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div
                  onClick={() => handleIncrement(product.id)}
                  className="cursor-pointer text-xl"
                >
                  +
                </div>
                <div
                  onClick={() => handleDecrement(product.id)}
                  className="cursor-pointer text-2xl"
                >
                  -
                </div>
              </div>
            </div>
          ))}
          <div
            className="font-bold py-3 ml-8 text-md  cursor-pointer bg-slate-700 text-center w-44 text-white rounded"
            onClick={handleReset}
          >
            Clear The Cart
          </div>
        </ul> */}
    </div>
  );
}
