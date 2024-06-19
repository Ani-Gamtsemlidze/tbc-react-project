import { getProduct } from "../../../../../user-api";
import InnerProduct from "../../../../../components/products/InnerProduct";
import { Metadata } from "next";

export interface PageParams {
  params: { id: number; locale: string };
}

export const metadata: Metadata = {
  title: "Veggie Product- Veggie Vibes",
  description: "Discover a variety of vegan products",
};

export default async function Page({ params }: PageParams) {
  const { id } = params;
  const innerProductData = await getProduct(id);

  return <InnerProduct innerProductData={innerProductData[0]} />;
}
