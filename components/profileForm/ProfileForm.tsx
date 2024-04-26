"use client";
import { useTranslations } from "next-intl";
import { ChangeEvent, useState } from "react";

interface ProfileFormProps {
  type: string;
  id: string;
  placeholder: string;
}
export default function ProfileForm({
  type,
  id,
  placeholder,
}: ProfileFormProps) {
  const t = useTranslations("Profile");

  const [userProfile, setUserProfile] = useState("");

  const handleProfile = (e: ChangeEvent<HTMLInputElement>) => {
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
