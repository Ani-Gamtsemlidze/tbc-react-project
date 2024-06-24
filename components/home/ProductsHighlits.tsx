import Link from "next/link";
import { getProducts } from "../../products-api/products-api";
import Image from "next/image";
import { arvo } from "../../app/fonts";
import { getTranslations } from "next-intl/server";
import { Product } from "../products/ProductsCard";

const ProductsHighlits = async () => {
  let productsData: Product[] = [];
  const t = await getTranslations("HomeSlider");

  try {
    productsData = await getProducts();
  } catch (error) {
    console.error("Error fetching products:", error);
  }
  const limitedProductsData = productsData.slice(0, 6);

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="border-b mb-5 flex justify-between text-sm">
        <div className="text-GreenColor flex items-center pb-2 pr-2 border-b-2 border-greenColor dark:border-darkTextMain uppercase">
          <h1
            className={`text-xl font-bold text-greenColor dark:text-darkTextMain ${arvo.className} `}
          >
            {t("veganFood")}
          </h1>
        </div>
        <Link
          className={`text-lg flex items-center justify-center ${arvo.className}`}
          href={`${process.env.BASE_URL}/products`}
        >
          See All
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {limitedProductsData.map((data) => (
          <div
            key={data.id}
            className="rounded overflow-hidden shadow-lg flex flex-col"
          >
            <div className="relative">
              <Link href={`${process.env.BASE_URL}/products/${data.id}`}>
                <Image
                  src={data.images[0]}
                  alt=""
                  className="w-full h-48 object-cover rounded-xl"
                  width={300}
                  height={300}
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-slate-700 opacity-25"></div>
              </Link>
              <Link href={`${process.env.BASE_URL}/products/${data.id}`}>
                <div className="text-xs absolute top-0 right-0 bg-greenColor px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:greenColor transition duration-500 ease-in-out">
                  Veggie Vibes 100%
                </div>
              </Link>
            </div>
            <div className="px-6 py-4 mb-auto">
              <Link href={`${process.env.BASE_URL}/products/${data.id}`}>
                {data.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { ProductsHighlits };
