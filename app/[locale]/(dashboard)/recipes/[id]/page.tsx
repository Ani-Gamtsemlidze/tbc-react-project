import { unstable_setRequestLocale } from "next-intl/server";
import { InnerRecipe } from "../../../../../components/recipes/InnerRecipe";
import { getRecipe } from "../../../../../user-api";
import { Metadata } from "next";

interface PageParams {
  params: { id: number; locale: string };
}

export const metadata: Metadata = {
  title: "Explore Vegan Recipe - Veggie Vibes",
  description: "Discover and cook a delicious vegan recipe on Veggie Vibes",
};

export default async function Page({ params }: PageParams) {
  const { id } = params;
  const recipeData = await getRecipe(id);

  unstable_setRequestLocale(params.locale);

  return <InnerRecipe recipeData={recipeData[0]} />;
}
