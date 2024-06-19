import { Metadata } from "next";
import ProductsPage from "../../../../components/products/ProductsPage";
import { getProducts } from "../../../../products-api/products-api";

export const metadata: Metadata = {
  title: "Exploring Vegan Products: Veggie Vibes",
  description:
    "Discover a variety of vegan products and brands across different categories at Veggie Vibes",
};

export default async function Home() {
  const productsData = await getProducts();

  return (
    <>
      <ProductsPage productsData={productsData} />
    </>
  );
}
