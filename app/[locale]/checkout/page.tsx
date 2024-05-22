import SelectedProducts from "../../../components/products/SelectedProducts";
import { getCarts } from "../../../user-api";

const userId = 28;

export default async function Checkout() {
  const cart = await getCarts(userId);
  const ids = cart.map((product: any) => product.product_id);

  const productQuantity = Object.fromEntries(
    cart.map((product: any) => [product.product_id, product.quantity])
  );
  const uniqueIds = Array.from(new Set(ids));

  const productDataArray = await Promise.all(
    uniqueIds.map(async (id) => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch product with ID ${id}`);
        }
        return await response.json();
      } catch (error) {
        console.error(`Error fetching product with ID ${id}:`, error);
        return null;
      }
    })
  );

  return (
    <div>
      <SelectedProducts
        productsData={productDataArray}
        initialQuantity={productQuantity}
      />
    </div>
  );
}
