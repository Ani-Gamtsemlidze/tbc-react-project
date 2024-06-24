import Link from "next/link";
import { arvo } from "../../app/fonts";
import Image from "next/image";
import { getProductsCategories } from "../../user-api";
import { getTranslations } from "next-intl/server";

interface Category {
  id: number;
  name: string;
  image_url: string;
}
const ShopCategories = async () => {
  let categories: Category[] = [];
  const t = await getTranslations("HomeSlider");

  try {
    categories = await getProductsCategories();
  } catch (error) {
    console.error("Error fetching product categories:", error);
  }
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="border-b mb-5 flex justify-between text-sm">
        <div className="text-GreenColor flex items-center pb-2 pr-2 border-b-2 border-greenColor dark:border-darkTextMain uppercase">
          <h1
            className={`text-xl font-bold text-greenColor dark:text-darkTextMain  ${arvo.className} `}
          >
            {t("shopCategories")}
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {categories.map((category) => (
          <div
            key={category.id}
            className="rounded overflow-hidden shadow-lg flex flex-col"
          >
            <div className="relative">
              <Link href={`/products/product_category/${category.name}`}>
                <Image
                  src={category.image_url}
                  alt={category.name}
                  className="w-full h-52 object-cover"
                  width={300}
                  height={300}
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-slate-700 opacity-25"></div>
              </Link>
              <Link href={`/products/product_category/${category.name}`}>
                <div className="text-xs absolute top-0 right-0 bg-greenColor px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:greenColor transition duration-500 ease-in-out">
                  Veggie Vibes 100%
                </div>
              </Link>
            </div>
            <div className="px-6 py-4 mb-auto">
              <Link href={`/products/product_category/${category.name}`}>
                {category.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { ShopCategories };
