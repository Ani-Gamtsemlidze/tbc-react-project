import Link from "next/link";
import { getRecipes } from "../../user-api";
import Image from "next/image";
import { inter, oleo } from "../../app/fonts";
import { getTranslations } from "next-intl/server";

const RecipesOfMonth = async () => {
  const t = await getTranslations("HomeSlider");
  let recipes = [];

  try {
    recipes = await getRecipes();
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  const limitedRecipes = recipes.slice(0, 6);

  return (
    <div className="flex flex-col p-16 max-sm:p-2 justify-center ">
      <h1
        className={` leading-snug text-7xl my-24 ${oleo.className} text-center dark:text-mainColor text-[#035C41]`}
      >
        <p>{t("recipes")} </p>
        {t("ofMonth")}
      </h1>
      <div className="flex justify-center flex-wrap max-sm:justify-evenly">
        {limitedRecipes.map((data: any) => (
          <Link
            href={`${process.env.BASE_URL}/recipes/${data.id}`}
            key={data.id}
            className=" text-[#27343A] dark:text-mainColor mr-4 max-sm:mr-0 max-sm:mb-10 "
          >
            <Image
              src={data?.images?.[0] ?? "/images/dessert.jpg"}
              alt=""
              className="w-60 h-48 object-cover rounded-xl"
              width={300}
              height={300}
            />
            <h1
              className={`text-xl text-greenColor ${inter.className} mt-3 w-36`}
            >
              {data.title}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export { RecipesOfMonth };
