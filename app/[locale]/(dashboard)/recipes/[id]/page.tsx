import { unstable_setRequestLocale } from "next-intl/server";
import { InnerBlog } from "../../../../../components/recipes/InnerBlog";
import { getRecipe } from "../../../../../user-api";

export default async function Page({
  params,
}: {
  params: { id: number; locale: string };
}) {
  unstable_setRequestLocale(params.locale);
  const { id } = params;
  const recipeData = await getRecipe(id);
  console.log(recipeData, "RECIPEDATA");

  return <InnerBlog recipeData={recipeData[0]} />;
}
