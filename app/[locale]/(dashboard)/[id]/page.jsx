import InnerProduct from "@/components/products/InnerProduct";
import { unstable_setRequestLocale } from "next-intl/server";

export async function generateStaticParams() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const products = await response.json();

    return products.products.map((product) => ({
      id: `{${product.id}}`,
    }));
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

async function getInnerData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page({ params }) {
  unstable_setRequestLocale(params.locale);
  const innerProductData = await getInnerData(params.id);

  return <InnerProduct innerProductData={innerProductData} />;
}
