import Link from "next/link";
import { getProducts } from "../../products-api/products-api";
import Image from "next/image";
import { arvo, inter } from "../../app/fonts";
import { MdArrowCircleRight } from "react-icons/md";

const ProductsHighlits = async () => {
  let productsData = [];

  try {
    productsData = await getProducts();
  } catch (error) {
    console.error("Error fetching products:", error);
  }
  const limitedProductsData = productsData.slice(0, 6);

  return (
    <div className="flex flex-col p-16 max-sm:p-2 justify-center ">
      <div className="my-4 flex justify-between">
        <h2
          className={`text-2xl font-bold text-greenColor  ${arvo.className} `}
        >
          Vegan Food Highlits
        </h2>
        <Link
          className="flex items-center"
          href={`${process.env.BASE_URL}/products`}
        >
          <span
            className={` ${arvo.className} text-xl font-bold text-black mr-3`}
          >
            See All
          </span>
          <MdArrowCircleRight className="text-xl  text-greenColor mr-4" />
        </Link>
      </div>
      <div className="flex justify-center flex-wrap max-sm:justify-evenly">
        {limitedProductsData.map((data: any) => (
          <Link
            href={`${process.env.BASE_URL}/products/${data.id}`}
            key={data.id}
            className=" text-[#27343A] dark:text-mainColor mr-4 max-sm:mr-0 max-sm:mb-10"
          >
            <Image
              src={data.images[0]}
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

export { ProductsHighlits };
