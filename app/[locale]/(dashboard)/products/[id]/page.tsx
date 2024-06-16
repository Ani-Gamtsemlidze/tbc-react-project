// // import { unstable_setRequestLocale } from "next-intl/server";
// import { getProduct } from "../../../../../user-api";
// import InnerProduct from "../../../../../components/products/InnerProduct";
// import { unstable_setRequestLocale } from "next-intl/server";

// // interface Product {
// //   id: number;
// // }

// interface PageParams {
//   params: { id: number; locale: string };
// }

// // export async function generateStaticParams({ params }: PageParams) {
// //   unstable_setRequestLocale(params.locale);

// //   try {
// //     const res = await fetch("https://dummyjson.com/products");
// //     const products = await res.json();

// //     const staticParams = products.products.map((product: Product) => ({
// //       id: `${product.id}`,
// //     }));
// //     return staticParams;
// //   } catch (error) {
// //     console.error("Error fetching posts:", error);
// //     return [];
// //   }
// // }

// // async function getInnerData(id: number) {
// //   const res = await getProduct(id);

// //   if (!res.ok) {
// //     throw new Error("Failed to fetch data");
// //   }
// //   return res.json();
// // }

// export default async function Page({ params }: PageParams) {
//   const { id } = params;
//   const innerProductData = await getProduct(id);

//   unstable_setRequestLocale(params.locale);
//   // const innerProductData = await getInnerData(id);

//   return <InnerProduct innerProductData={innerProductData[0]} />;
// }

import { getProduct } from "../../../../../user-api";
import InnerProduct from "../../../../../components/products/InnerProduct";
import { unstable_setRequestLocale } from "next-intl/server";
import { getProducts } from "../../../../../products-api/products-api";

export interface PageParams {
  params: { id: number; locale: string };
}

export async function generateStaticParams({ params }: PageParams) {
  unstable_setRequestLocale(params.locale);

  try {
    // Fetch products from your database or API
    const products = await getProducts(); // Adjust getProduct to fetch all products

    const staticParams = products.map((product: any) => ({
      params: {
        id: product.id.toString(), // Assuming product.id is a number
      },
    }));
    return staticParams;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function Page({ params }: PageParams) {
  const { id } = params;
  const innerProductData = await getProduct(id);

  return <InnerProduct innerProductData={innerProductData[0]} />;
}
