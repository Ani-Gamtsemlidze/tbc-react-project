// import { getSession } from "@auth0/nextjs-auth0";
// import { getCarts } from "../../../../user-api";

import { Metadata } from "next";
import CartPage from "../../../../components/cart/CartPage";
import { arvo } from "../../../fonts";

export const metadata: Metadata = {
  title: "titleeeee",
  description: "descriptiiiii",
};

export default async function Page() {
  // const {user}: any = await getSession()
  // const cart = await getCarts(user!.sub!);
  return (
    <div className="bg-mainColor ">
      <div className="text-center">
        <h1 className={`text-2xl  mt-4 ${arvo.className}`}>CART</h1>
        <span className="text-sm">
          Add $11.10 worth of items to your order and get free shispping!
        </span>
      </div>
      <div>
        <CartPage />
      </div>
    </div>
  );
}
