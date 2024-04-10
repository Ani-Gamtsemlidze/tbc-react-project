import HomePage from "@/components/home/HomePage";
import { Suspense } from "react";
import Loading from "./loading";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";

async function getProductsData() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const productsData = await getProductsData();

  return (
      <ErrorBoundary fallback={<Error />}>
    <Suspense fallback={<Loading />}>

      <HomePage productsData={productsData} />
     </Suspense>
      </ErrorBoundary>
  );
}
