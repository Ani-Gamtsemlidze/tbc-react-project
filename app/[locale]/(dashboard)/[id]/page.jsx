import InnerProduct from "@/components/products/InnerProduct";

export async function generateStaticParams() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const products = await response.json();

    const staticParams = products.products.map((product) => ({
      params: { id: `{/${product.id}}` },
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
  const id = params.id;
  const innerProductData = await getInnerData(id);

  return <InnerProduct innerProductData={innerProductData} />;
}
