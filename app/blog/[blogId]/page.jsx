import InnerBlog from "@/components/blog/InnerBlog";

export async function generateStaticParams() {
  const posts = await fetch("https://dummyjson.com/recipes").then((res) =>
    res.json()
  );

  return posts.map((post) => ({
    blogId: post.blogId,
  }));
}

async function blogsInnerData({ params }) {
  const { blogId } = params;
  const res = await fetch(`https://dummyjson.com/recipes/${blogId}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page({ params }) {
  const blogsData = await blogsInnerData({ params });

  return <InnerBlog blogsData={blogsData} />;
}
