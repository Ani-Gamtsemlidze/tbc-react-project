import Link from "next/link";
import { arvo, inter } from "../../app/fonts";
import Image from "next/image";
import { getProductsCategories } from "../../user-api";

const ShopCategories = async () => {
  const categories = await getProductsCategories();

  return (
    <div className="flex flex-col p-16 justify-center max-sm:p-2  ">
      <div className="my-4">
        <h2
          className={`text-2xl font-bold text-greenColor  ${arvo.className} `}
        >
          Shop By Category
        </h2>
      </div>
      <div className="flex justify-center flex-wrap max-sm:justify-evenly">
        {categories.map((category: any) => (
          <Link
            href={`/products/product_category/${category.name}`}
            key={category.id}
            className=" text-[#27343A] dark:text-mainColor mr-4 max-sm:mr-0 max-sm:mb-10"
          >
            <Image
              src={category.image_url}
              alt=""
              className="w-60 h-48 object-cover rounded-xl"
              width={300}
              height={300}
            />
            <h1
              className={`text-xl text-greenColor ${inter.className} mt-3 w-36`}
            >
              {category.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export { ShopCategories };
