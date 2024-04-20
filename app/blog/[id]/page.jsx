import InnerBlog from "@/components/blog/InnerBlog";
export async function generateStaticParams() {
  try {
    const response = await fetch("https://dummyjson.com/recipes");
    if (!response.ok) {
      throw new Error("Failed to fetch blogs");
    }
    const recipes = await response.json();

    const staticParams = recipes.recipes.map((blog) => ({
      params: { id: `{/blog/${blog.id}}` },
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
  const id = params.id;
  const blogsData = await blogsInnerData(id);

  return <InnerBlog blogsData={blogsData} />;
}
