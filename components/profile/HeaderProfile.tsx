"use client";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { ImProfile } from "react-icons/im";

import { IoMdLogOut } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";

import { getUser } from "../../user-api";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import Link from "next/link";

export interface User {
  firstname?: string;
  lastname?: string;
  email?: string;
  nickname?: string;
  picture?: any;
}

export default function HeaderProfile({ isDropDown, handleDropDown }: any) {
  const t = useTranslations("Header");
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const { user } = useUser();

  useEffect(() => {
    if (user?.sub) {
      fetchUser(user.sub);
    }
  }, []);

  const fetchUser = async (userId: string) => {
    if (user) {
      const userData = await getUser(userId);
      setUserInfo(userData[0]);
    }
  };
  console.log(userInfo);

  return (
    <>
      <div className="flex items-center">
        <div
          onClick={handleDropDown}
          className="w-12 h-12 rounded-full border-2 border-greenColor dark:border-darkTextMain flex items-center justify-center relative"
        >
          {userInfo?.picture ? (
            <Image
              className={`w-10 h-10 object-cover rounded-full cursor-pointer`}
              src={userInfo.picture}
              alt="avatar"
              width={400}
              height={400}
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-200" />
          )}
          {isDropDown && (
            <ul
              onClick={(e) => e.stopPropagation()}
              id="dropdown"
              className=" bg-white dark:bg-slate-800 border border-greenColor shadow-md  rounded  absolute top-14 right-[-8] z-50 py-4 w-60 min-h-60"
            >
              <div className="flex justify-center flex-col">
                <div className="flex  mt-2 mx-auto">
                  <p className="text-lg  ">
                    {userInfo?.firstname} {userInfo?.lastname}
                  </p>
                </div>
                <p className="text-center text-sm text-gray-400 ">
                  {userInfo?.email}
                </p>
              </div>
              <div className="mt-4">
                <li
                  className={` border-b text-[#64a643] border-b-gray-400 mx-3 dark:text-[#CBD5E1]  flex items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700 pl-4 py-2`}
                >
                  <FaRegCircleUser className="text-xl" />
                  <Link
                    href={"/profile"}
                    className="   text-black dark:text-white px-2 py-1 rounded-sm transition dark:hover:border-[#B85042]"
                  >
                    Profile
                    {/* {t("profile")} */}
                  </Link>
                </li>
                <li
                  className={` border-b border-b-gray-400 mx-3 text-[#64a643]  dark:text-[#CBD5E1]  flex items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700 pl-4 py-2`}
                >
                  <ImProfile className="text-lg" />
                  <Link
                    href={"/myrecipes"}
                    className="   text-black dark:text-white px-2 py-1 rounded-sm transition dark:hover:border-[#B85042]"
                  >
                    My Recipes
                  </Link>
                </li>
                <li
                  className={` border-b border-b-gray-400 mx-3 text-[#B85042] dark:text-[#CBD5E1]  flex items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700 pl-4 py-2`}
                >
                  <IoMdLogOut className="text-xl" />

                  <a
                    href="/api/auth/logout"
                    className="text-black dark:text-white px-2 py-1 rounded-sm transition dark:hover:border-[#B85042]"
                  >
                    {t("logout")}
                  </a>
                </li>
              </div>
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
