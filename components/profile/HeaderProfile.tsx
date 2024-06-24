"use client";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { PiBowlFood } from "react-icons/pi";
import { getUser } from "../../user-api";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { RiMapPinUserLine } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";
import { BsBox2Heart } from "react-icons/bs";

export interface User {
  firstname?: string;
  lastname?: string;
  email?: string;
  nickname?: string;
  picture?: any;
}

const HeaderProfile = () => {
  const t = useTranslations("HeaderProfile");
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const { user } = useUser();

  useEffect(() => {
    if (user?.sub) {
      fetchUser(user.sub);
    }
  }, [user]);

  const fetchUser = async (userId: string) => {
    try {
      const userData = await getUser(userId);
      setUserInfo(userData[0]);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div className="flex items-center">
      <Menu as="div" className="relative">
        <MenuButton className="w-12 h-12 rounded-full border-2 border-greenColor dark:border-darkTextMain flex items-center justify-center cursor-pointer">
          {userInfo?.picture ? (
            <Image
              className="w-10 h-10 object-cover rounded-full"
              src={userInfo.picture}
              alt="avatar"
              width={400}
              height={400}
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-200" />
          )}
        </MenuButton>
        <Transition
          enter="transition ease-out duration-75"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <MenuItems className="bg-white dark:bg-slate-800 border border-gray-200 shadow-md rounded-xl absolute top-14 right-0 z-50 py-4 w-60 max-lg:w-32 min-h-60">
            <div className="flex justify-center flex-col">
              <div className="flex mt-2 mx-auto">
                <p className="text-lg">
                  {userInfo?.firstname} {userInfo?.lastname}
                </p>
              </div>
              <p className="text-center text-sm text-gray-400">
                {userInfo?.email}
              </p>
            </div>
            <div className="mt-4">
              <MenuItem>
                {({ active }) => (
                  <Link
                    href="/profile"
                    className={`border-b border-b-gray-400 mx-3 flex items-center cursor-pointer pl-4 py-2 ${
                      active ? "bg-gray-200 dark:bg-slate-700" : ""
                    }`}
                  >
                    <RiMapPinUserLine className="text-lg text-greenColor" />
                    <span className="text-black dark:text-white px-2 py-1 text-sm rounded-sm transition dark:hover:border-[#B85042]">
                      {t("profile")}
                    </span>
                  </Link>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <Link
                    href="/myrecipes"
                    className={`border-b border-b-gray-400 mx-3 flex items-center cursor-pointer pl-4 py-2 ${
                      active ? "bg-gray-200 dark:bg-slate-700" : ""
                    }`}
                  >
                    <PiBowlFood className="text-md text-greenColor" />
                    <span className="text-black dark:text-white px-2 py-1 text-sm rounded-sm transition dark:hover:border-[#B85042]">
                      {t("myRecipes")}
                    </span>
                  </Link>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <Link
                    href="/orders"
                    className={`border-b border-b-gray-400 mx-3 flex items-center cursor-pointer pl-4 py-2 ${
                      active ? "bg-gray-200 dark:bg-slate-700" : ""
                    }`}
                  >
                    <BsBox2Heart className="text-md text-greenColor" />
                    <span className="text-black dark:text-white px-2 py-1 text-sm rounded-sm transition dark:hover:border-[#B85042]">
                      {t("orders")}
                    </span>
                  </Link>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <a
                    href="/api/auth/logout"
                    className={`border-b border-b-gray-400 mx-3 flex items-center cursor-pointer pl-4 py-2 ${
                      active ? "bg-gray-200 dark:bg-slate-700" : ""
                    }`}
                  >
                    <IoMdLogOut className="text-lg text-red-900" />
                    <span className="text-black dark:text-white px-2 py-1 text-sm rounded-sm transition dark:hover:border-[#B85042]">
                      {t("logout")}
                    </span>
                  </a>
                )}
              </MenuItem>
            </div>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
};

export default HeaderProfile;
