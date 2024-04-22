"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function ProfileForm({ type, id, placeholder }) {
  const t = useTranslations("Profile");

  const [userProfile, setUserProfile] = useState("");

  const handleProfile = (e) => {
    setUserProfile(e.target.value);
  };

  return (
    <>
      <label htmlFor={id}>{t("title")}</label>
      <input
        className="py-2 pl-2 bg-[#E5E7EB] placeholder:text-[#B85042]  text-white outline-none"
        autoComplete="off"
        id={id}
        type={type}
        value={userProfile}
        placeholder={placeholder}
        onChange={handleProfile}
      />
    </>
  );
}
