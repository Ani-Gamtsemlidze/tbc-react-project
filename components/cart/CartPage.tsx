"use client";

import useCart from "../../hooks/useCart";
import Image from "next/image";
import { AiTwotoneDelete } from "react-icons/ai";
import { LuMinusCircle } from "react-icons/lu";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoBagCheckOutline } from "react-icons/io5";

export default function CartPage() {
  const {
    cartData,
    productsData,
    dataQuantity,
    totalPrice,
    handleQuantityChange,
  } = useCart();

  console.log(cartData, dataQuantity, "cart page");

  return (
    <>
      <div className="flex justify-center ">
        <div>
          {productsData.map((product: any) => {
            const cartItem = cartData.find(
              (item: any) => item.product_id === product.id
            );
            return (
              <div
                className="flex items-center shadow py-6 ml-4 w-[800px] my-8 px-6 transition hover:bg-[rgb(244,244,244)] rounded-lg"
                key={product.id}
              >
                <div className="items-start pr-2 ">
                  <Image
                    className="w-20 h-20 object-cover rounded-lg"
                    src={product.images[2]}
                    alt="image"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="items-center justify-center pl-4  border-l ">
                    <h1 className="text-[#16442a] font-bold text-xl mb-2 w-64">
                      {product.title}
                    </h1>
                    <p className="text-black text-xl">$ {product.price}</p>
                  </div>
                  <div>
                    <AiTwotoneDelete className="text-xl" />
                  </div>
                  <div className="border rounded-lg w-32 py-2 flex items-center justify-between ">
                    <p onClick={() => handleQuantityChange(product.id, -1)}>
                      <LuMinusCircle className="text-lg ml-3 cursor-pointer" />
                    </p>
                    <p>{cartItem?.quantity}</p>
                    <p onClick={() => handleQuantityChange(product.id, 1)}>
                      <IoMdAddCircleOutline className="text-xl mr-3 cursor-pointer" />
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" my-8 w-96 rounded-xl ml-8 h-80 px-4 py-10 text-gray-600 shadow">
          <div className="mb-4 w-20 rounded-md bg-greenColor px-2 py-1 text-sm font-medium text-white">
            Payment
          </div>
          <div className="flex items-center justify-between">
            <p className="mb-2 text-2xl">Total Products</p>
            <span className="text-2xl ">{dataQuantity}</span>
          </div>
          <div className="flex items-center justify-between border-t">
            <p className="mb-2 text-2xl">Total Price</p>
            <span className="text-2xl ">$ {totalPrice} USD</span>
          </div>

          <button className="bg-[#145f48] mt-8 mx-auto text-white flex items-center justify-center py-4 w-52  rounded-3xl shadow-md hover:bg-green-600 transition duration-200">
            <IoBagCheckOutline className="text-2xl mr-3" />
            Checkout
          </button>
        </div>

        {/* <div className="w-96 h-96 border border-black rounded-xl">
          <p>Payment</p>
          <div>
            <p>products {dataQuantity}</p>
          </div>
          <button className="bg-[#145f48] text-white flex items-center justify-center py-6 w-80 ml-3 rounded-3xl shadow-md hover:bg-green-600 transition duration-200">
            <IoBagCheckOutline className="text-2xl mr-3" />
            Checkout
          </button>
        </div> */}
      </div>
    </>
  );
}
