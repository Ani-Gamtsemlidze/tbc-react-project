import { unstable_setRequestLocale } from "next-intl/server";
import { InnerBlog } from "../../../../../components/recipes/InnerBlog";
import { getRecipe } from "../../../../../user-api";

// interface Blog {
//   id: number;
// }

// interface PageParams {
//   params: { id: number; locale: string };
// }

export default async function Page({
  params,
}: {
  params: { id: number; locale: string };
}) {
  unstable_setRequestLocale(params.locale);
  const { id } = params;
  console.log("ID", id);
  const recipeData = await getRecipe(id);

  return <InnerBlog recipeData={recipeData[0]} />;
}
