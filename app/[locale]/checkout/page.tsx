"use client";
import { useLocalStorage } from "../../../hooks";
import SelectedProducts from "./SelectedProducts";

export default function Checkout() {
  const [storedProducts = []] = useLocalStorage("selectedProducts");
  const productIds: number[] = Object.keys(storedProducts).map(Number);

  return (
    <div>
      <SelectedProducts ids={productIds} />
    </div>
  );
}
