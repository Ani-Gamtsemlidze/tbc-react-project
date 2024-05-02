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

  return (
    <>
      <ProductsPage productsData={productsData} />
    </>
  );
}
