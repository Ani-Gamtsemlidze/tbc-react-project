"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaCloudUploadAlt } from "react-icons/fa";
import AvatarUploadPage from "../avatar/page";

export interface User {
  firstname?: string;
  lastname?: string;
  email?: string;
  nickname?: string;
  picture?: any;
}

export default function UserInfo({ userData }: any) {
  const [isUpload, setIsUpload] = useState(false);
  const [user, setUser] = useState(userData[0] || {});
  console.log(userData[0]);

  useEffect(() => {
    setUser(userData[0] || {});
  }, [userData[0]]);

  function handleUploadPicture() {
    setIsUpload(!isUpload);
  }

  return (
    <div className="m-6 max-w-sm relative max-sm:w-full  max-sm:m-0">
      <div className="rounded-lg w-96 max-sm:w-full border bg-white dark:bg-darkBgColor dark:border-darkSecondaryColor px-4 pt-8 pb-10 shadow-lg">
        <div
          onClick={handleUploadPicture}
          className="relative mx-auto w-36 rounded-full"
        >
          {/* <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span> */}
          <Image
            src={user?.picture}
            className="rounded-full object-cover  h-40 max-w-40"
            width={400}
            height={400}
            // quality={100}
            alt="image"
          />
          <div className="absolute cursor-pointer rounded-full top-0 left-0 inset-0 w-40 h-40 z-50 flex justify-center items-center bg-[rgb(3,92,65)] bg-opacity-40   opacity-0 transition-opacity duration-300 hover:opacity-100">
            <FaCloudUploadAlt className="text-white dark:text-darkTextColor w-9 h-9" />
          </div>
        </div>
        {isUpload && <AvatarUploadPage setIsUpload={setIsUpload} />}
        <h1 className="my-1 text-center text-xl font-bold leading-8 text-gray-900 dark:text-darkTextColor">
          {user?.firstname} {user?.lastname}
        </h1>
        <h3 className="font-lg text-semibold text-center leading-6 text-gray-600 dark:text-darkTextColor">
          {user?.email}
        </h3>
        <ul className="mt-3 divide-y rounded bg-gray-100 dark:bg-darkSecondaryColor dark:text-darkTextColor py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
          <li className="flex items-center py-3 text-sm">
            <span>Nickname</span>
            <span className="ml-auto">{user?.nickname}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
