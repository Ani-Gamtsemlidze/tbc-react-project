import InnerBlog from "@/components/blog/InnerBlog";
import Image from "next/image";
async function blogsInnerData({ params }) {
  const res = await fetch(`https://dummyjson.com/recipes/${params.recipeId}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page({ params }) {
  const blogsData = await blogsInnerData({ params });

  return (
    <InnerBlog blogsData={blogsData} />

  );
}
