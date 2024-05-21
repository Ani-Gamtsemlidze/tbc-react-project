import dynamic from "next/dynamic";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

type Props = {
  selectedNum: number;
};

const ItemsBucket = ({ selectedNum }: Props) => (
  <Link href="/checkout" className="flex relative">
    <IoCartOutline className="w-6 h-6 text-black ml-4 object-cover cursor-pointer" />
    <span className="absolute bottom-4 right-[-8px] text-black">
      {selectedNum}
    </span>
  </Link>
);

export default dynamic(() => Promise.resolve(ItemsBucket), { ssr: false });
