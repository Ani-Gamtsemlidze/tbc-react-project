"use client";

import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { useCart } from "../../app/context/CartContext";
import { useTranslations } from "next-intl";
import { arvo } from "../../app/fonts";
import { EmptyCart } from "./EmptyCart";
import { CartItem } from "./CartItem";
import { CheckoutBox } from "./CheckoutBox";

export default function CartPage() {
  const t = useTranslations("CartPage");
  const { cartData, handleRemoveProducts } = useCart();

  return (
    <>
      {cartData.length > 0 ? (
        <div className="flex flex-col items-center">
          <header className="text-center py-4">
            <h1
              className={`text-2xl ${arvo.className} dark:text-darkTextColor`}
            >
              {t("header")}
            </h1>
            <p className="text-sm mt-2 dark:text-darkTextColor">
              {t("freeShippingNotice")}
            </p>
          </header>
          <div className="flex justify-center">
            <div className="flex flex-col">
              <CartItem />
              <div className="my-8 flex rounded-3xl items-center justify-start w-full">
                <button
                  onClick={handleRemoveProducts}
                  className="focus:ring outline-none flex items-center rounded-lg text-white dark:text-darkTextColor  bg-gray-500 px-8 py-2 font-bold active:scale-95 hover:opacity-90"
                >
                  <AiTwotoneDelete className="text-lg mr-3 text-black  dark:text-darkTextMain" />
                  {t("clearCart")}
                </button>
              </div>
            </div>
            <CheckoutBox />
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}
