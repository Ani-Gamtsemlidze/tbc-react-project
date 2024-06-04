"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import { FaCloudUploadAlt } from "react-icons/fa";
import AvatarUploadPage from "../avatar/page";
import { useState } from "react";
// import { useTranslations } from "next-intl";

interface User {
  given_name?: string;
  family_name?: string;
  email?: string;
  email_verified?: boolean;
  locale?: string;
  name?: string;
  nickname?: string;
  picture?: string;
  sid?: string;
  sub?: string;
  updated_at?: string;
}

export default function UserInfo({ picture }: any) {
  const { user, error, isLoading } = useUser();
  const [isUpload, setIsUpload] = useState(false);
  // const t = useTranslations("Profile");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  function handleUploadPicture() {
    setIsUpload(!isUpload);
  }

  const typedUser = user as User;

  return (
    <div className="bg-white w-[500px] rounded-xl flex flex-col items-center justify-center h-[300px] relative">
      <div className="absolute top-[-60px]">
        <Image
          src={picture}
          className="rounded-full object-cover w-40 h-40 shadow-slate-950 shadow"
          width={250}
          height={250}
          alt="image"
        />
      </div>
      <div
        onClick={handleUploadPicture}
        className="absolute cursor-pointer rounded-full top-[-60px] left-[96px] inset-0 w-40 h-40 z-50 flex justify-center items-center bg-gray-800 bg-opacity-75 opacity-0 transition-opacity duration-300 hover:opacity-100"
      >
        <FaCloudUploadAlt className="text-white w-9 h-9" />
      </div>
      {isUpload && <AvatarUploadPage />}
      <div className="flex">
        <h2>{typedUser.given_name || user?.name?.split("@")[0]}</h2>
        <p className="ml-2">{typedUser.family_name}</p>
      </div>
      <p>{typedUser.email}</p>
      {/* <button
        className=" hover:bg-slate-300 bg-slate-200  dark:bg-slate-500 transition px-4 py-2 "
        type="submit"
      >
        {t("button")}
      </button> */}
    </div>
  );
}
