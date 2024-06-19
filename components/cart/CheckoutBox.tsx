import { IoBagCheckOutline } from "react-icons/io5";
import { useCart } from "../../app/context/CartContext";
import { useTranslations } from "next-intl";

const CheckoutBox = () => {
  const t = useTranslations("CartPage");
  const { checkout, dataQuantity, totalPrice } = useCart();

  return (
    <div className="my-8 w-96 rounded-xl ml-8 h-80 px-4 py-10 text-gray-600 shadow">
      <div className="mb-4 w-20 rounded-md bg-greenColor px-2 py-1 text-sm font-medium text-white">
        {t("payment")}
      </div>
      <div className="flex items-center justify-between">
        <p className="mb-2 text-2xl">{t("totalProducts")}</p>
        <span className="text-2xl">{dataQuantity}</span>
      </div>
      <div className="flex items-center justify-between border-t">
        <p className="mb-2 text-2xl">{t("totalPrice")}</p>
        <span className="text-2xl">$ {Math.floor(totalPrice)} USD</span>
      </div>
      <button
        onClick={checkout}
        className="bg-[#145f48] mt-8 mx-auto text-white flex items-center justify-center py-4 w-52 rounded-3xl shadow-md hover:bg-green-600 transition duration-200"
      >
        <IoBagCheckOutline className="text-2xl mr-3" />
        {t("checkout")}
      </button>
    </div>
  );
};

export { CheckoutBox };
