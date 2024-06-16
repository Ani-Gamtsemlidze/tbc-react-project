import { unstable_setRequestLocale } from "next-intl/server";
import { InnerBlog } from "../../../../../components/recipes/InnerBlog";
import { getRecipe, getRecipes } from "../../../../../user-api";

interface PageParams {
  params: { id: number; locale: string };
}

export async function generateStaticParams({ params }: PageParams) {
  unstable_setRequestLocale(params.locale);

  try {
    const recipes = await getRecipes();

    const staticParams = recipes.map((recipe: any) => ({
      params: {
        id: recipe.id.toString(),
      },
    }));
    return staticParams;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
}

export default async function Page({ params }: PageParams) {
  const { id } = params;
  const recipeData = await getRecipe(id);

  unstable_setRequestLocale(params.locale);

  return <InnerBlog recipeData={recipeData[0]} />;
}
