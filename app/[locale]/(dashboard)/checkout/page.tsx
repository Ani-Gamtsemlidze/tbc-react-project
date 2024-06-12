// import { getSession } from "@auth0/nextjs-auth0";
import { getSession } from "@auth0/nextjs-auth0";
// import SelectedProducts from "../../../../components/products/SelectedProducts";
import { getCarts } from "../../../../user-api";

export default async function Checkout() {
  const { user }: any = await getSession();

  const cart = await getCarts(user?.sub);
  console.log("CART", cart);

  return (
    <div>
      {/* <CartItems isDropDown={isDropDown} /> */}
      {/* <SelectedProducts
        productsData={productDataArray}
        initialQuantity={productQuantity}
      /> */}
    </div>
  );
}
