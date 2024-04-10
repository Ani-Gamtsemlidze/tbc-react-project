import InnerProduct from "@/components/products/InnerProduct";

async function getInnerData({ params }) {
  const res = await fetch(`https://dummyjson.com/products/${params.productId}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page({ params }) {
  const innerProductData = await getInnerData({ params });

  return (
    <InnerProduct innerProductData={innerProductData} />

  );
}
