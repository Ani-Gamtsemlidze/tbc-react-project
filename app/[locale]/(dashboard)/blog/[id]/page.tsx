import { unstable_setRequestLocale } from "next-intl/server";
import { InnerBlog } from "../../../../../components/blog/InnerBlog";

interface Blog {
  id: number;
}

interface PageParams {
  params: { id: number; locale: string };
}
export async function generateStaticParams({ params }: PageParams) {
  unstable_setRequestLocale(params.locale);

  try {
    const res = await fetch("https://dummyjson.com/recipes");
    const recipes = await res.json();
    const staticParams = recipes.recipes.map((blog: Blog) => ({
      id: `${blog.id}`,
    }));
    return staticParams;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

async function blogsInnerData(id: number) {
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page({ params }: PageParams) {
  const { id } = params;
  unstable_setRequestLocale(params.locale);
  const blogsData = await blogsInnerData(id);

  return <InnerBlog blogsData={blogsData} />;
}
