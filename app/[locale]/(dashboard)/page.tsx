import { Metadata } from "next";
import Categories from "../../../components/categories/Categories";
import ProductsSlider from "../../../components/products/ProductsSlider";
import { ShopCategories } from "../../../components/home/ShopCategories";
import { ProductsHighlits } from "../../../components/home/ProductsHighlits";
import { RecipesOfMonth } from "../../../components/home/RecipesOfMonth";
import { unstable_setRequestLocale } from "next-intl/server";
import { Params } from "./contact/page";

export const metadata: Metadata = {
  title: "Discover the Vegan Lifestyle at Veggie Vibes",
  description:
    "Explore vegan products, trending categories, and delicious recipes at Veggie Vibes",
};

export default function Home({ params }: Params) {
  unstable_setRequestLocale(params.locale);

  return (
    <div className="bg-mainColor dark:bg-slate-500 ">
      <ProductsSlider />
      <div>
        <ShopCategories />
      </div>
      <div className="">
        <ProductsHighlits />
      </div>

      <Categories />

      <RecipesOfMonth />
    </div>
  );
}
