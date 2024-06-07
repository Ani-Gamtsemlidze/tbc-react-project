import ProductsCategory from "../../../../../../components/categories/ProductsCategory";

export default function CategoryPage({ params }: { params: { id: string } }) {
  console.log("PARAMS", params.id);
  return <ProductsCategory categoryName={params.id} />;
}
