import { getSession } from "@auth0/nextjs-auth0";
import { getOrderProducts } from "../../../../user-api";
import OrderProducts from "../../../../components/products/OrderProducts";

export default async function Page() {
  const session = await getSession();
  const products = await getOrderProducts(session?.user?.sub);
  return (
    <div className="bg-mainColor h-screen">
      <OrderProducts products={products} />
    </div>
  );
}
