"use client";
import Image from "next/image";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoBagCheckOutline } from "react-icons/io5";
import { LuMinusCircle } from "react-icons/lu";
import { AiTwotoneDelete } from "react-icons/ai";
import Link from "next/link";
import { useCart } from "../../app/context/CartContext";
import { roboto_mono } from "../../app/fonts";
import { useTranslations } from "next-intl";
import { VscSend } from "react-icons/vsc";

interface CartDropdownItemsProps {
  handleDropDown: () => void;
}

interface ProductData {
  id: number;
  images: string[];
  title: string;
  price: number;
}

export default function CartDropdownItems({
  handleDropDown,
}: CartDropdownItemsProps) {
  const {
    cartData,
    productsData,
    dataQuantity,
    totalPrice,
    checkout,
    handleQuantityChange,
    handleRemoveItem,
    handleRemoveProducts,
  } = useCart();

  const t = useTranslations("cart");

  return (
    <>
      <div
        onClick={handleDropDown}
        className="bg-[rgba(0,0,0,0.7)] overflow-auto flex h-screen top-0 w-screen right-0 z-50 fixed"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="fade-animation bg-white dark:bg-darkSecondaryColor max-w-[700px] rounded-lg min-h-[635px] top-6 right-6 z-50 absolute justify-between flex flex-col"
        >
          {cartData.length > 0 ? (
            <div>
              <div
                className={`flex justify-center flex-col border-b py-2 mx-6 ${roboto_mono.className}`}
              >
                <div className="flex mt-8">
                  <p className="text-2xl">{t("cartItems")}</p>
                  <span className="bg-greenColor text-white w-8 h-8 flex items-center justify-center rounded-full ml-4">
                    {dataQuantity}
                  </span>
                </div>
                <div className="mt-4">
                  <span className="text-sm pl-1">{t("info")}</span>
                </div>
              </div>
              <div className="max-h-60 overflow-y-scroll">
                {productsData.map((product: ProductData) => {
                  const cartItem = cartData.find(
                    (item) => item.product_id === product.id
                  );
                  return (
                    <div
                      key={product.id}
                      className="flex items-center w-full my-8 px-6 transition hover:bg-[rgb(244,244,244)] dark:hover:bg-darkContentColor rounded-lg"
                    >
                      <div className="pr-2">
                        <Image
                          className="w-20 h-20 object-cover rounded-lg"
                          src={product.images[2]}
                          alt="Product Image"
                          width={400}
                          height={400}
                        />
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <div className="pl-4 border-l">
                          <h1 className="text-[#16442a] dark:text-darkTextColor font-bold text-xl mb-2 w-64">
                            {product.title}
                          </h1>
                          <p className="text-black dark:text-darkTextColor text-xl">
                            $ {product.price}
                          </p>
                        </div>
                        <div onClick={() => handleRemoveItem(product.id)}>
                          <AiTwotoneDelete className="text-xl cursor-pointer" />
                        </div>
                        <div className="border rounded-lg w-32 py-2 flex items-center justify-between">
                          <button
                            onClick={() => handleQuantityChange(product.id, -1)}
                            className="text-lg ml-3 cursor-pointer"
                            disabled={cartItem?.quantity === 1}
                          >
                            <LuMinusCircle
                              className={
                                cartItem?.quantity === 1
                                  ? "text-gray-500"
                                  : "text-black"
                              }
                            />
                          </button>
                          <p>{cartItem?.quantity}</p>
                          <button
                            onClick={() => handleQuantityChange(product.id, 1)}
                            className="text-xl mr-3 cursor-pointer"
                          >
                            <IoMdAddCircleOutline />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="px-8">
                <div className="mb-6 flex justify-between">
                  <div
                    className={`flex flex-col justify-start ${roboto_mono.className}`}
                  >
                    <p className="text-2xl">{t("totalPrice")}</p>
                    <span className="text-sm pl-1 mt-1">{t("taxes")}</span>
                  </div>
                  <span className="text-xl font-bold">
                    $ {Math.floor(totalPrice)} USD
                  </span>
                </div>

                <div className="flex justify-between">
                  <Link
                    href={`${process.env.BASE_URL}/cart`}
                    onClick={handleDropDown}
                    className="bg-[#145f48] dark:bg-darkContentColor text-white text-center py-3 w-80 rounded-3xl shadow-md hover:bg-green-600 dark:hover:bg-darkContentColor transition duration-200"
                  >
                    {t("viewCart")}
                  </Link>
                  <button
                    onClick={checkout}
                    className="bg-[#145f48] dark:bg-darkContentColor flex items-center justify-center py-3 w-80 ml-3 rounded-3xl shadow-md text-white hover:bg-green-600  dark:hover:bg-darkContentColor transition duration-200"
                  >
                    <IoBagCheckOutline className="text-2xl mr-3" />
                    {t("checkout")}
                  </button>
                </div>

                <div
                  onClick={handleRemoveProducts}
                  className="my-8 flex rounded-3xl items-center justify-end gap-5 w-full"
                >
                  <button className="flex items-center rounded-lg text-white bg-gray-500 px-8 py-2 font-bold active:scale-95 hover:opacity-90 focus:ring outline-none">
                    <AiTwotoneDelete className="text-lg mr-3 text-black" />
                    {t("clearCart")}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-[400px] flex flex-col items-center justify-between h-[400px]">
              <div className="mt-20">
                <Image
                  className="w-64 h-40 object-cover rounded-lg "
                  src="/images/empty-cart.jpg"
                  width={300}
                  height={300}
                  alt="empty cart"
                />
                <p className="text-2xl mt-2 text-center font-semibold text-gray-600 dark:text-darkTextMain">
                  {t("emptyMessage")}
                </p>
              </div>

              <Link
                href={`${process.env.BASE_URL}`}
                onClick={handleDropDown}
                className="group flex cursor-pointer items-center rounded-xl bg-greenColor dark:bg-darkBgColor px-6 py-2 text-center font-semibold leading-tight text-white"
              >
                {t("continueMessage")}
                <VscSend className="w-8 h-8 text-white object-cover group-hover:ml-8 ml-4 transition-all" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
