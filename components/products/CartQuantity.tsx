import dynamic from "next/dynamic";

const CartQuantity = ({ quantity }: any) => (
  <span className="ml-4">Quantity: {quantity}</span>
);

export default dynamic(() => Promise.resolve(CartQuantity), { ssr: false });
