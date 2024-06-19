"use client";
import { BsCart } from "react-icons/bs";
import useDropdown from "../../hooks";
import CartQuantity from "./CartQuantity";
import { useCart } from "../../app/context/CartContext";
import CartDropdownItems from "../cart/CartDropdownItems";

export default function ItemBucket() {
  const { isDropDown, handleDropDown, popupRef } = useDropdown();
  const { dataQuantity } = useCart();

  return (
    <div className="flex relative mx-4">
      <BsCart
        className="text-3xl cursor-pointer text-[#16442a] dark:text-darkTextMain"
        onClick={handleDropDown}
      />
      <div className="relative cursor-pointer">
        <CartQuantity quantity={dataQuantity} />
      </div>
      {isDropDown && (
        <div ref={popupRef}>
          <CartDropdownItems handleDropDown={handleDropDown} />
        </div>
      )}
    </div>
  );
}
