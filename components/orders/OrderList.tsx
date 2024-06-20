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
    <div className="bg-mainColor  min-h-screen rounded-lg shadow-md overflow-hidden divide-y divide-gray-200">
      <div className="max-w-[800px] mx-auto py-8 px-3 w-full">
        {filteredOrders.map((order) => (
          <div
            key={order.latest_charge.id}
            className="p-4 bord border-[12px] rounded-lg border-greenColor mb-6 "
          >
            <div className="flex justify-between items-center mb-2">
              <p className="text-lg font-semibold">
                {t("orderAmount")}: ${(order.amount / 100).toFixed(2)}
              </p>
              <span
                className={`px-2 py-1 rounded ${
                  order.latest_charge.amount_refunded > 0
                    ? "bg-red-500 text-white"
                    : "bg-green-500 text-white"
                }`}
              >
                {order.latest_charge.amount_refunded > 0 ? "Refunded" : "Paid"}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              {t("phone")}: {order.metadata.phone || "N/A"}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              {t("name")}: {order.latest_charge.billing_details.name || "N/A"}
            </p>
            <a
              href={order.latest_charge.receipt_url}
              aria-label="Order Receipt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-greenColor underline "
            >
              {t("viewReceipt")}
            </a>
          </div>
        ))}
        {filteredOrders.length === 0 && (
          <p className="p-4 text-center text-gray-500">{t("noOrder")}</p>
        )}
      </div>
    </div>
  );
};

export { OrdersList };