import { unstable_setRequestLocale } from "next-intl/server";
import { InnerProduct } from "../../../../../components/products/InnerProduct";

interface Product {
  id: number;
}

interface PageParams {
  params: { id: number; locale: string };
}

export async function generateStaticParams({ params }: PageParams) {
  unstable_setRequestLocale(params.locale);

  try {
    const res = await fetch("https://dummyjson.com/products");
    const products = await res.json();

    const staticParams = products.products.map((product: Product) => ({
      id: `${product.id}`,
    }));
    return staticParams;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

async function getInnerData(id: number) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page({ params }: PageParams) {
  const { id } = params;
  unstable_setRequestLocale(params.locale);
  const innerProductData = await getInnerData(id);

  return <InnerProduct innerProductData={innerProductData} />;
}
