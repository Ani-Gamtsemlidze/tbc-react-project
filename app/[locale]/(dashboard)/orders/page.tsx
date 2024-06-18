import { OrdersList } from "../../../../components/orders/OrderList";
import { getOrders } from "../../../../user-api";

// import OrdersList from "@/components/userOrders/OrderList";
export default async function Orders() {
  const orders = await getOrders();
  console.log(orders, "orders");
  return (
    <>
      <OrdersList orders={orders} />
    </>
  );
}
