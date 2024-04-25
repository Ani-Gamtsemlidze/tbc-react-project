import InnerProduct from "@/components/products/InnerProduct";
import { unstable_setRequestLocale } from "next-intl/server";
import { getProductsData } from "../page";

export async function generateStaticParams() {
  try {
    const products = await getProductsData();

    const staticParams = products.products.map((product) => ({
      id: `${product.id}`,
    }));
    return staticParams;
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
  const { id } = params;
  unstable_setRequestLocale(params.locale);
  const innerProductData = await getInnerData(id);

  return <InnerProduct innerProductData={innerProductData} />;
}
