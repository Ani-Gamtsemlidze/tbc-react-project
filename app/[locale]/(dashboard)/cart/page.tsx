import { Metadata } from "next";
import CartPage from "../../../../components/cart/CartPage";
import { unstable_setRequestLocale } from "next-intl/server";
import { Params } from "../contact/page";

export const metadata: Metadata = {
  title: "Your Shopping Cart - Add Products and Get Free Shipping",
  description:
    "Manage your cart, add or remove products, and enjoy free shipping on orders over $11.10.",
};

export default async function Page({ params }: Params) {
  unstable_setRequestLocale(params.locale);

  return (
    <main className="bg-mainColor min-h-screen">
      <section>
        <CartPage />
      </section>
    </main>
  );
}
