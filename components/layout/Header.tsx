"use client";
import { useState } from "react";
import Navigation from "./Navigation";
import LocalSwitcher from "../langSwitcher/LocalSwitcher";
import ThemeSwitch from "../theme/ThemeSwitch";
import LoginBtn from "../login/LoginBtn";
import { useUser } from "@auth0/nextjs-auth0/client";
import useDropdown from "../../hooks";
import ItemBucket from "../products/ItemBucket";
import HeaderProfile from "../profile/HeaderProfile";
import { Logo } from "./Logo";
import { SideBar } from "./SideBar";

export default function Header() {
  const { user } = useUser();
  const { popupRef } = useDropdown();
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <header
        className={`max-lg:hidden items-center shadow-custom dark:shadow-customDark bg-mainColor dark:bg-darkBgColor py-1 px-8 sticky top-0 z-50 ${
          showSidebar ? "hidden" : ""
        }`}
      >
        <div className="flex items-center w-full justify-between">
          <div className="flex">
            <Logo />
            <Navigation />
          </div>
          <div className="flex items-center mt-6">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center">
                <ThemeSwitch />
                <ItemBucket />
              </div>
              <div className="ml-4 border-l border-l-slate-600 pl-2">
                {user ? (
                  <div ref={popupRef}>
                    <HeaderProfile />
                  </div>
                ) : (
                  <LoginBtn />
                )}
              </div>
            </div>
            <LocalSwitcher />
          </div>
        </div>
      </header>

      {showSidebar && <SideBar />}

      <button
        className="lg:hidden fixed top-3 right-4 z-50 p-3 bg-greenColor rounded-full text-white"
        onClick={toggleSidebar}
      >
        {showSidebar ? "Close" : "Menu"}
      </button>
    </>
  );
}
