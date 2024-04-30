"use client";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { FiUser } from "react-icons/fi";

export default function LogoutBtn() {
  const router = useRouter();

  const t = useTranslations("Header");
  const handleLogout = async () => {
    try {
      await fetch("/login/api", {
        method: "GET",
      });

      router.push("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="flex items-center">
        <FiUser />
        <button
          className="text-black px-2 py-1 rounded-sm transition dark:hover:border-[#B85042]"
          onClick={handleLogout}
        >
          {t("logout")}
        </button>
      </div>
    </>
  );
}
