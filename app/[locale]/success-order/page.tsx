import Link from "next/link";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const Success = () => {
  return (
    <section className="bg-mainColor h-screen flex items-center">
      <div className="mx-auto bg-white flex max-w-lg flex-col items-center rounded-md border px-8 py-10 text-gray-800 shadow-lg">
        <FaCircleCheck className="text-5xl text-greenColor" />
        <p className="mt-4 text-center text-xl font-bold">
          Payment Successful!
        </p>
        <p className="mt-2 text-center text-lg">Thank you for your purchase.</p>
        <span className="truncate font-medium">
          {" "}
          Your order has been placed successfully.
        </span>
        <div className="mt-8 flex flex-col justify-center space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
          <Link
            href={`${process.env.BASE_URL}/orders`}
            className="whitespace-nowrap rounded-md bg-gray-200 px-4 py-3 font-medium"
          >
            My Orders
          </Link>
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

export default Success;
