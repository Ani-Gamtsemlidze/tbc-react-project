import ProductsCategory from "../../../../../../components/categories/ProductsCategory";

export default function CategoryPage({ params }: { params: { id: string } }) {
  return <ProductsCategory categoryName={params.id} />;
}
