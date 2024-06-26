import { getSession } from "@auth0/nextjs-auth0";
import { getUserRecipes } from "../../../../user-api";

import UserRecipe from "../../../../components/recipes/UserRecipe.";
import { oleo } from "../../../fonts";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Recipes- Veggie Vibes",
  description:
    "Discover delicious recipes added by our community at Veggie Vibes. Explore a variety of vegetarian and vegan dishes that you can try at home.",
};

export default async function Page() {
  const session = await getSession();
  const user = session?.user;
  const t = await getTranslations("userRecipes");

  if (!user) {
    return <div>User not logged in</div>;
  }

  const userRecipes = await getUserRecipes(user?.sub);

  return (
    <div className="min-h-screen bg-mainColor dark:bg-darkBgColor">
      <h1
        className={` text-5xl my-12 ${oleo.className} text-center dark:text-mainColor text-[#035C41]`}
      >
        {t("myRecipes")}
      </h1>

      <UserRecipe data={userRecipes} userId={user?.sub} />
    </div>
  );
}
