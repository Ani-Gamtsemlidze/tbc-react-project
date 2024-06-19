import { Metadata } from "next";
import RecipesPage from "../../../../components/recipes/RecipesPage";

export const metadata: Metadata = {
  title: "Explore Vegan Recipes - Veggie Vibes",
  description: "Discover and cook delicious vegan recipes on Veggie Vibes",
};
export default async function Recipes() {
  return <RecipesPage />;
}
