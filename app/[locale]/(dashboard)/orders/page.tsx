import { Metadata } from "next";
import { OrdersList } from "../../../../components/orders/OrderList";
import { getOrders } from "../../../../user-api";

export const metadata: Metadata = {
  title: "My Orders- Veggie Vibes",
  description: "Check My Orders",
};

export default async function Orders() {
  const orders = await getOrders();
  return (
    <>
      <OrdersList orders={orders} />
    </>
  );
}
