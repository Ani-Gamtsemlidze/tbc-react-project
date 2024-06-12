import dynamic from "next/dynamic";

const CartQuantity = ({ quantity }: any) => (
  <span className="bg-greenColor text-white w-6 h-6 flex items-center justify-center  absolute bottom-4 right-[-5px] mx-auto rounded-full">
    {quantity}
  </span>
);

export default dynamic(() => Promise.resolve(CartQuantity), { ssr: false });
