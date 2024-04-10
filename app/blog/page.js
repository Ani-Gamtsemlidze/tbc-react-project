import BlogPage from "@/components/blog/BlogPage";
async function blogsData() {
  const res = await fetch("https://dummyjson.com/recipes");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Blog() {
  const blogs = await blogsData();

  return <BlogPage data={blogs} />;
}
