import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { cookies } from "next/headers";

const ItemsBucket = async () => {
  // const cookieStore = cookies();
  // const cart_total: any = cookieStore.get("cart_total");

  return (
    <Link href="/checkout" className="flex relative">
      <IoCartOutline className="w-6 h-6 text-black ml-4 object-cover cursor-pointer" />
      {/* {cart_total !== undefined && ( */}
      <span className="absolute bottom-4 right-[-8px] text-black">
        {/* {cart_total} */}
      </span>
      {/* )} */}
    </Link>
  );
};

export default ItemsBucket;
