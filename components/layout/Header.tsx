"use client";
import Link from "next/link";
import Navigation from "./Navigation";
import LocalSwitcher from "../langSwitcher/LocalSwitcher";
import ThemeSwitch from "../theme/ThemeSwitch";
import LoginBtn from "../login/LoginBtn";
import { useUser } from "@auth0/nextjs-auth0/client";
import { merienda } from "../../app/fonts";
import useDropdown from "../../hooks";
import ItemBucket from "../products/ItemBucket";
import HeaderProfile from "../profile/HeaderProfile";

export default function Header() {
  const { user } = useUser();
  const { popupRef } = useDropdown();

  return (
    <>
      <header className="flex items-center shadow-custom dark:shadow-customDark bg-mainColor dark:bg-darkBgColor  py-1 px-8 sticky top-0 z-50">
        <div className="flex items-center w-full justify-between">
          <div className="flex">
            <Link
              className={`font-bold text-3xl dark:text-darkTextMain text-[#035C41] leading-normal mx-4 ${merienda.className}`}
              href="/"
            >
              Veggy
              <p className="ml-5">Vibes</p>
            </Link>
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
    </>
  );
}
