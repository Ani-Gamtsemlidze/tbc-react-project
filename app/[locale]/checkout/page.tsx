"use client";
import { useLocalStorage } from "../../../hooks";
import SelectedProducts from "./SelectedProducts";

export default function Checkout() {
  const [storedProducts = []] = useLocalStorage("selectedProducts");
  const productIds: number[] = Object.keys(storedProducts).map(Number);
  console.log(productIds);

  return (
    <div>
      <SelectedProducts ids={productIds} />
    </div>
  );
}
