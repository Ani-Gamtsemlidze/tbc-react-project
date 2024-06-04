import Category from "../../../../../../components/categories/Category";

export default function CategoryPage({ params }: { params: { id: string } }) {
  console.log("PARAMS", params.id);
  return <Category categoryName={params.id} />;
}
