import InnerBlog from "@/components/blog/InnerBlog";
import { unstable_setRequestLocale } from "next-intl/server";
import { getBlogsData } from "../page";
export async function generateStaticParams() {
  try {
    const recipes = await getBlogsData();

    const staticParams = recipes.recipes.map((blog) => ({
      id: `${blog.id}`,
    }));
    return staticParams;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

async function blogsInnerData(id) {
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page({ params }) {
  const { id } = params;
  unstable_setRequestLocale(params.locale);
  const blogsData = await blogsInnerData(id);

  return <InnerBlog blogsData={blogsData} />;
}
