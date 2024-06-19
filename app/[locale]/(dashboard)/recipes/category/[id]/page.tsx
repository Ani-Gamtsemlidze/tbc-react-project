import { Metadata } from "next";
import Category from "../../../../../../components/categories/Category";

export const metadata: Metadata = {
  title: "Explore Vegan Recipe Category: Veggie Vibes",
  description: "Discover a variety of delicious vegan recipes at Veggie Vibes",
};

export default function CategoryPage({ params }: { params: { id: string } }) {
  return <Category categoryName={params.id} />;
}
