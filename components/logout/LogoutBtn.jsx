"use client";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function LogoutBtn() {
  const router = useRouter();

  const t = useTranslations("Header");
  const handleLogout = async () => {
    try {
      await fetch("/login/api");
      router.push("/en/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <button
        className="text-white border px-2 py-1 rounded-sm  hover:text-white transition dark:hover:border-[#B85042]"
        onClick={() => handleLogout()}
      >
        {t("logout")}
      </button>
    </div>
  );
}
