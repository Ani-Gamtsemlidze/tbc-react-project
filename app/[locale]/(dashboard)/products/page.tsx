// import { cookies } from "next/headers";
import ProductsPage from "../../../../components/products/ProductsPage";
import { getProducts } from "../../../../user-api";

export default async function Home() {
  const productsData = await getProducts();
  console.log("DATA", productsData);

  // const cart_total: any = cookies().get("cart_total")?.value;

  return (
    <>
      <ProductsPage productsData={productsData} />
    </>
  );
}
