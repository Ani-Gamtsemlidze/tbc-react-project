"use client";
import { useTranslations } from "next-intl";
import { FiUser } from "react-icons/fi";

export default function LogoutBtn() {
  const t = useTranslations("Header");

  return (
    <>
      <div className="flex items-center">
        <FiUser />

        <a
          href="/api/auth/logout"
          className="text-black dark:text-white px-2 py-1 rounded-sm transition dark:hover:border-[#B85042]"
        >
          {t("logout")}
        </a>
      </div>
    </>
  );
}
