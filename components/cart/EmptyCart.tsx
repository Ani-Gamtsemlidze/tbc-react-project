import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { VscSend } from "react-icons/vsc";

const EmptyCart = async () => {
  const t = useTranslations("CartPage");
  return (
    <div className="flex flex-col items-center justify-between ">
      <div className="">
        <Image
          className="w-64 h-40 object-cover rounded-lg "
          src="/images/empty-cart.jpg"
          width={300}
          height={300}
          alt="empty cart"
        />
        <p className="text-2xl font-semibold text-gray-600">
          {t("emptyMessage")}
        </p>
      </div>
      <Link
        href="/"
        className="group flex cursor-pointer items-center rounded-xl bg-greenColor dark:bg-darkBgColor px-6 py-2 text-center font-semibold leading-tight text-white"
      >
        {t("continueMessage")}
        <VscSend className="w-8 h-8 text-white object-cover group-hover:ml-8 ml-4 transition-all" />
      </Link>
    </div>
  );
};

export { EmptyCart };
