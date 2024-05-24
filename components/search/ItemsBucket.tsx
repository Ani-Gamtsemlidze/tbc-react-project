import dynamic from "next/dynamic";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

const ItemsBucket = ({ total }: any) => (
  <Link href="/checkout" className="flex relative">
    <IoCartOutline className="w-6 h-6 text-black ml-4 object-cover cursor-pointer" />
    <span className="absolute bottom-4 right-[-8px] text-black">{total}</span>
  </Link>
);

export default dynamic(() => Promise.resolve(ItemsBucket), { ssr: false });
