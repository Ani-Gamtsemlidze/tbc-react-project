import { Metadata } from "next";
import CartPage from "../../../../components/cart/CartPage";

export const metadata: Metadata = {
  title: "Your Shopping Cart - Add Products and Get Free Shipping",
  description:
    "Manage your cart, add or remove products, and enjoy free shipping on orders over $11.10.",
};

export default async function Page() {
  return (
    <main className="bg-mainColor min-h-screen">
      <section>
        <CartPage />
      </section>
    </main>
  );
}
