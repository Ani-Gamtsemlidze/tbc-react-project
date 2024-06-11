// import { getSession } from "@auth0/nextjs-auth0";
import { getSession } from "@auth0/nextjs-auth0";
// import SelectedProducts from "../../../../components/products/SelectedProducts";
import { getCarts } from "../../../../user-api";
import CartItems from "../../../../components/products/CartItems";

export default async function Checkout() {
  const { user }: any = await getSession();

  const cart = await getCarts(user?.sub);
  console.log("CART", cart);
  // const ids = cart.map((product: any) => product.product_id);

  // const productQuantity = Object.fromEntries(
  //   cart.map((product: any) => [product.product_id, product.quantity])
  // );
  // const uniqueIds = Array.from(new Set(ids));

  // const productDataArray = await Promise.all(
  //   uniqueIds.map(async (id) => {
  //     try {
  //       const response = await getProducts();
  //       if (!response.ok) {
  //         throw new Error(`Failed to fetch product with ID ${id}`);
  //       }
  //       return await response.json();
  //     } catch (error) {
  //       console.error(`Error fetching product with ID ${id}:`, error);
  //       return null;
  //     }
  //   })
  // );

  return (
    <div>
      <CartItems />
      {/* <SelectedProducts
        productsData={productDataArray}
        initialQuantity={productQuantity}
      /> */}
    </div>
  );
}
