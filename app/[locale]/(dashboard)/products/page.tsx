import { cookies } from "next/headers";
import ProductsPage from "../../../../components/products/ProductsPage";

async function getProductsData() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const productsData = await getProductsData();

  const cart_total: any = cookies().get("cart_total")?.value;

  return (
    <>
      <ProductsPage productsData={productsData} cart_total={cart_total} />
    </>
  );
}
