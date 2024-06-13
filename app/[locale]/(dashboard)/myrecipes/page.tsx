import { getSession } from "@auth0/nextjs-auth0";
import { getUserRecipes } from "../../../../user-api";

import UserRecipe from "../../../../components/recipes/UserRecipe.";
import { oleo } from "../../../fonts";

export default async function Page() {
  const { user }: any = await getSession();

  if (!user) {
    return <div>User not logged in</div>;
  }

  const userRecipes = await getUserRecipes(user?.sub);

  return (
    <div className="h-screen bg-mainColor">
      <h1
        className={` text-5xl my-12 ${oleo.className} text-center dark:text-mainColor text-[#035C41]`}
      >
        My Recipes
      </h1>{" "}
      <UserRecipe data={userRecipes} />
    </div>
  );
}
