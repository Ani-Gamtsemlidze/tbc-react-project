import React from "react";
import { Logo } from "./Logo";
import Navigation from "./Navigation";
import ThemeSwitch from "../theme/ThemeSwitch";
import ItemBucket from "../products/ItemBucket";
import LocalSwitcher from "../langSwitcher/LocalSwitcher";
import HeaderProfile from "../profile/HeaderProfile";
import LoginBtn from "../login/LoginBtn";
import { useUser } from "@auth0/nextjs-auth0/client";
import useDropdown from "../../hooks";

const SideBar = () => {
  const { user } = useUser();
  const { popupRef } = useDropdown();
  return (
    <div className="min-h-screen w-screen bg-gray-50 z-50 absolute  lg:hidden">
      <div className="absolute w-full left-0 flex min-h-screen items-center flex-col overflow-hidden rounded-r-2xl bg-mainColor text-black">
        <div className="flex mt-12">
          <Logo />
        </div>
        <ul className="mt-0 space-y-3  overflow-y-auto">
          <li className="relative flex items-center cursor-pointer space-x-2 rounded-md py-4 px-3 text-gray-300">
            <ItemBucket />

            <div className="ml-4 border-l border-l-slate-600 pl-2">
              {user ? (
                <div ref={popupRef}>
                  <HeaderProfile />
                </div>
              ) : (
                <LoginBtn />
              )}
            </div>
          </li>
          <li className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-black">
            <Navigation />
          </li>
          <li className="relative flex  cursor-pointer space-x-2 rounded-md py-4 px-6 font-semibold">
            <LocalSwitcher />
            <ThemeSwitch />
          </li>

          {/* <li className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-gray-300 hover:bg-slate-600">
            <div className="ml-4 border-l border-l-slate-600 pl-2">
              {user ? (
                <div ref={popupRef}>
                  <HeaderProfile />
                </div>
              ) : (
                <LoginBtn />
              )}
            </div>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export { SideBar };
