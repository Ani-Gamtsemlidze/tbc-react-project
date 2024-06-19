import { unstable_setRequestLocale } from "next-intl/server";
import { InnerBlog } from "../../../../../components/recipes/InnerBlog";
import { getRecipe } from "../../../../../user-api";

interface PageParams {
  params: { id: number; locale: string };
}

export default async function Page({ params }: PageParams) {
  const { id } = params;
  const recipeData = await getRecipe(id);

  unstable_setRequestLocale(params.locale);

  return <InnerBlog recipeData={recipeData[0]} />;
}
