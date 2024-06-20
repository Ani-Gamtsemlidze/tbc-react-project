import Link from "next/link";
import { getRecipes } from "../../user-api";
import Image from "next/image";
import { inter } from "../../app/fonts";

const RecipesOfMonth = async () => {
  const recipes = await getRecipes();

  const limitedRecipes = recipes.slice(0, 6);

  return (
    <div className="flex flex-col p-16 justify-center ">
      <div className="flex">
        {limitedRecipes.map((data: any) => (
          <Link
            href={`${process.env.BASE_URL}/recipes/${data.id}`}
            key={data.id}
            className=" text-[#27343A] dark:text-mainColor mr-4"
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
