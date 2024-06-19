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
import useDropdown from "../../hooks";

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

  const { isDropDown, handleDropDown, popupRef } = useDropdown();

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
    <>
      <div className="flex items-center">
        <div
          onClick={handleDropDown}
          className="w-12 h-12 rounded-full border-2 border-greenColor dark:border-darkTextMain flex items-center justify-center relative cursor-pointer"
        >
          {userInfo?.picture ? (
            <Image
              className="w-10 h-10 object-cover rounded-full cursor-pointer"
              src={userInfo.picture}
              alt="avatar"
              width={400}
              height={400}
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-200" />
          )}
          {isDropDown && (
            <div
              ref={popupRef}
              className="bg-white dark:bg-slate-800 border border-greenColor shadow-md rounded absolute top-14 right-[-8] z-50 py-4 w-60 min-h-60"
            >
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
              <div className="mt-4" ref={popupRef}>
                {renderDropdownItem(
                  <FaRegCircleUser className="text-xl text-greenColor" />,
                  t("profile"),
                  "/profile"
                )}
                {renderDropdownItem(
                  <ImProfile className="text-lg text-greenColor" />,
                  t("myRecipes"),
                  "/myrecipes"
                )}
                {renderDropdownItem(
                  <ImProfile className="text-lg text-greenColor" />,
                  t("orders"),
                  "/orders"
                )}
                {renderDropdownItem(
                  <IoMdLogOut className="text-xl text-red-900" />,
                  t("logout"),
                  "/api/auth/logout"
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );

  function renderDropdownItem(icon: JSX.Element, text: string, href: string) {
    return (
      <Link
        onClick={handleDropDown} // Close dropdown when a link is clicked
        href={href}
        className="border-b border-b-gray-400 mx-3 flex items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700 pl-4 py-2"
      >
        {icon}
        <span className="text-black dark:text-white px-2 py-1 rounded-sm transition dark:hover:border-[#B85042]">
          {text}
        </span>
      </Link>
    );
  }
};

export default HeaderProfile;
