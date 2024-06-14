import Link from "next/link";
import React from "react";
import { FaTimesCircle } from "react-icons/fa";

const Cancel = () => {
  return (
    <section className="bg-mainColor h-screen flex items-center">
      <div className="mx-auto bg-white flex max-w-lg flex-col items-center rounded-md border px-8 py-10 text-gray-800 shadow-lg">
        <FaTimesCircle className="text-5xl text-red-500" />
        <p className="mt-4 text-center text-xl font-bold">Order Canceled</p>
        <p className="mt-2 text-center text-lg">
          Your order has been canceled. If you have any questions, please
          contact our support.
        </p>
        <div className="mt-8 flex flex-col justify-center space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
          <Link
            href={`${process.env.BASE_URL}/`}
            className="whitespace-nowrap rounded-md bg-gray-200 px-4 py-3 font-medium"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cancel;
