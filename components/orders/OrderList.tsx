"use client";
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useTranslations } from "next-intl";

const OrdersList = ({ orders }: { orders: any }) => {
  const { user } = useUser();
  const t = useTranslations("orders");

  const filteredOrders = orders.filter(
    (order: any) =>
      order.latest_charge &&
      order.latest_charge.billing_details &&
      order.latest_charge.billing_details.email === user?.email
  );

  console.log(filteredOrders);

  return (
    <div className="bg-mainColor min-h-screen rounded-lg shadow-md overflow-hidden divide-y divide-gray-200">
      {filteredOrders.map((order: any) => (
        <div key={order.latest_charge.id} className="p-4">
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
            className="text-blue-500 underline"
          >
            {t("viewReceipt")}
          </a>
        </div>
      ))}
      {filteredOrders.length === 0 && (
        <p className="p-4 text-center text-gray-500">{t("noOrder")}</p>
      )}
    </div>
  );
};

export { OrdersList };
