import { getProduct } from "../../../../../user-api";
import InnerProduct from "../../../../../components/products/InnerProduct";

export interface PageParams {
  params: { id: number; locale: string };
}

export default async function Page({ params }: PageParams) {
  const { id } = params;
  const innerProductData = await getProduct(id);

  return <InnerProduct innerProductData={innerProductData[0]} />;
}
