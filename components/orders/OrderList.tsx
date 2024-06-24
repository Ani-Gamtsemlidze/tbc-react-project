"use client";
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useTranslations } from "next-intl";

interface Order {
  latest_charge: {
    id: string;
    billing_details: {
      email: string;
      name: string;
    };
    amount: number;
    amount_refunded: number;
    receipt_url: string;
  };
  amount: number;
  metadata: {
    phone: string | null;
  };
}

interface OrdersListProps {
  orders: Order[];
}

const OrdersList: React.FC<OrdersListProps> = ({ orders }) => {
  const { user } = useUser();
  const t = useTranslations("orders");

  const filteredOrders = orders.filter(
    (order) =>
      order.latest_charge &&
      order.latest_charge.billing_details &&
      order.latest_charge.billing_details.email === user?.email
  );

  console.log(filteredOrders);

  return (
    <div className="flex p-16 overflow-x-auto bg-mainColor dark:bg-darkBgColor min-h-screen rounded-lg shadow-md overflow-hidden divide-y divide-gray-200">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              {t("orderAmount")}
            </th>
            <th scope="col" className="px-6 py-3">
              {t("status")}
            </th>
            <th scope="col" className="px-6 py-3">
              {t("phone")}
            </th>
            <th scope="col" className="px-6 py-3">
              {t("name")}
            </th>
            <th scope="col" className="px-6 py-3">
              {t("viewReceipt")}
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <tr
              key={order.latest_charge.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                ${(order.amount / 100).toFixed(2)}
              </th>
              <td className="px-6 py-4">
                <span
                  className={`px-2 py-1 rounded ${
                    order.latest_charge.amount_refunded > 0
                      ? "bg-red-500 text-white dark:text-darkTextMain "
                      : "bg-greenColor text-white dark:text-darkTextMain "
                  }`}
                >
                  {order.latest_charge.amount_refunded > 0
                    ? "Refunded"
                    : `${t("paid")}`}
                </span>
              </td>
              <td className="px-6 py-4">{order.metadata.phone || "N/A"}</td>
              <td className="px-6 py-4">
                {order.latest_charge.billing_details.name || "N/A"}
              </td>
              <td className="px-6 py-4">
                <a
                  href={order.latest_charge.receipt_url}
                  aria-label="Order Receipt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-greenColor underline"
                >
                  {t("viewReceipt")}
                </a>
              </td>
            </tr>
          ))}
          {filteredOrders.length === 0 && (
            <tr>
              <td className="p-4 text-center text-gray-500">{t("noOrder")}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export { OrdersList };
