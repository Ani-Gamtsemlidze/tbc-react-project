import { Metadata } from "next";
import ProductsCategory from "../../../../../../components/categories/ProductsCategory";

export const metadata: Metadata = {
  title: "Explore Vegan Product Category: Veggie Vibes",
  description:
    "Discover a variety of vegan products and brands across different categories at Veggie Vibes",
};

export default function CategoryPage({ params }: { params: { id: string } }) {
  return <ProductsCategory categoryName={params.id} />;
}
