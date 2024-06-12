"use client";
import Image from "next/image";
import { IoMdAddCircleOutline } from "react-icons/io";
import { LuMinusCircle } from "react-icons/lu";
import { AiTwotoneDelete } from "react-icons/ai";

export default function CartItems({
  productsData,
  dataQuantity,
  cartData,
  totalPrice,
  handleQuantityChange,
  handleRemoveProducts,
}: any) {
  return (
    <>
      <div className="bg-[rgba(0,0,0,0.7)] flex h-screen top-0 w-screen right-0 z-50 fixed">
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white w-[600px] rounded-lg h-[700px] top-6 right-6 z-50 absolute"
        >
          <h1 className="text-2xl">cart Items: {dataQuantity} </h1>
          <div className="max-h-52 overflow-y-scroll">
            {productsData.map((product: any) => {
              const cartItem = cartData.find(
                (item: any) => item.product_id === product.id
              );
              return (
                <div
                  className="flex items-center w-full my-8 transition hover:bg-[rgb(244,244,244)] rounded-lg"
                  key={product.id}
                >
                  <div className="items-start pl-8">
                    <Image
                      className="w-20 h-20 object-cover rounded-lg"
                      src={product.images[2]}
                      alt="image"
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <div className="items-center justify-center ml-8 border-l pl-8">
                      <h1 className="text-[#16442a] font-bold text-xl mb-2">
                        {product.title}
                      </h1>
                      <p className="text-black text-xl">$ {product.price}</p>
                    </div>
                    <div>
                      <AiTwotoneDelete />
                    </div>
                    <div className="border rounded-lg w-32 py-2 flex items-center justify-between mr-4 ">
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
          <div className="">
            <div className="mt-32 flex justify-between">
              <p>
                Total Price: <span>$ {Math.floor(totalPrice)} </span>
              </p>
            </div>
            <div className="flex justify-between px-8 py-4 ">
              <button
                onClick={handleRemoveProducts}
                className="bg-red-500 text-white px-4 py-4 w-80 rounded-2xl shadow-md hover:bg-red-600 transition duration-200"
              >
                Clear Cart
              </button>
              <button className="bg-green-500 text-white px-4 py-4 ml-3 w-80 rounded-2xl shadow-md hover:bg-green-600 transition duration-200">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
