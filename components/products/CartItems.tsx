"use client";
import Image from "next/image";
import { IoMdAddCircleOutline } from "react-icons/io";
import { LuMinusCircle } from "react-icons/lu";
import { AiTwotoneDelete } from "react-icons/ai";
import { roboto_mono } from "../../app/fonts";
import { IoBagCheckOutline } from "react-icons/io5";
import Link from "next/link";
import { useCart } from "../../app/context/CartContext";

export default function CartItems({ handleDropDown }: any) {
  const {
    cartData,
    productsData,
    dataQuantity,
    totalPrice,
    handleQuantityChange,
    handleRemoveProducts,
    handleRemoveItem,
  } = useCart();
  return (
    <>
      <div
        onClick={handleDropDown}
        className="bg-[rgba(0,0,0,0.7)] flex h-screen top-0 w-screen right-0 z-50 fixed"
      >
        {cartData.length === 0 ? (
          <div className="bg-white w-[300px] rounded-lg h-[300px] top-24 right-24 z-50 absolute">
            <p className="text-black text-2xl text-center mt-4">
              Your Cart is empty
            </p>
          </div>
        ) : (
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-[700px] rounded-lg h-[700px] top-6 right-6 z-50 absolute justify-between flex flex-col"
          >
            <div>
              <div
                className={`flex justify-center flex-col border-b py-2 mx-6 ${roboto_mono.className}  `}
              >
                <div className="flex mt-8 ">
                  <p className="text-2xl">cart Items </p>
                  <span className="bg-greenColor text-white w-8 h-8 items-center flex ml-4 justify-center rounded-full">
                    {dataQuantity}
                  </span>
                </div>
                <div className="mt-4">
                  <span className="text-sm pl-1">
                    Add <b>$3.15</b> worth of items to your order to qualify for
                    free shipping!
                  </span>
                </div>
              </div>
              <div className="max-h-60 overflow-y-scroll">
                {productsData.map((product: any) => {
                  const cartItem = cartData.find(
                    (item: any) => item.product_id === product.id
                  );
                  return (
                    <div
                      className="flex items-center w-full my-8 px-6 transition hover:bg-[rgb(244,244,244)] rounded-lg"
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
                          <p className="text-black text-xl">
                            $ {product.price}
                          </p>
                        </div>
                        <div onClick={() => handleRemoveItem(product.id)}>
                          <AiTwotoneDelete className="text-xl" />
                        </div>
                        <div className="border rounded-lg w-32 py-2 flex items-center justify-between ">
                          <p
                            onClick={() => handleQuantityChange(product.id, -1)}
                          >
                            <LuMinusCircle className="text-lg ml-3 cursor-pointer" />
                          </p>
                          <p>{cartItem?.quantity}</p>
                          <p
                            onClick={() => handleQuantityChange(product.id, 1)}
                          >
                            <IoMdAddCircleOutline className="text-xl mr-3 cursor-pointer" />
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="px-8">
              <div className=" mb-6 flex justify-between">
                <div
                  className={`flex flex-col justify-start ${roboto_mono.className} `}
                >
                  <p className={`text-2xl `}>Total Price</p>
                  <span className={`text-sm  pl-1 mt-1 `}>
                    Inclusive taxes. Shipping is calculated at checkout{" "}
                  </span>
                </div>
                <span className={`text-xl font-bold`}>
                  $ {Math.floor(totalPrice)} USD
                </span>
              </div>
              <div className="flex justify-between">
                <Link
                  href={`${process.env.BASE_URL}/cart`}
                  // onClick={handleRemoveProducts}
                  className="bg-[#145f48] text-white text-center  py-6 w-80 rounded-3xl shadow-md hover:bg-green-600 transition duration-200"
                >
                  View Cart
                </Link>
                <button className="bg-[#145f48] mx-auto text-white flex items-center justify-center py-6 w-80 ml-3 rounded-3xl shadow-md hover:bg-green-600 transition duration-200">
                  <IoBagCheckOutline className="text-2xl mr-3" />
                  Checkout
                </button>
              </div>
              <div
                onClick={handleRemoveProducts}
                className="my-8 flex rounded-3xl items-center justify-end gap-5 w-full"
              >
                <button className="focus:ring outline-none flex items-center rounded-lg text-white bg-gray-500 px-8 py-2 font-bold active:scale-95 hover:opacity-90">
                  <AiTwotoneDelete className="text-lg mr-3 text-black" />
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
