"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ThemeSwitch from "../theme/ThemeSwitch";
import LocalSwitcher from "../langSwitcher/LocalSwitcher";
import { useTranslations } from "next-intl";
import { FormEvent, useEffect, useState } from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { RiLockPasswordFill } from "react-icons/ri";

import { FaRegUser } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import { useTheme } from "next-themes";
import { fira_sans, arvo } from "../../app/fonts";

export default function LoginForm() {
  const [isDark, setIsDark] = useState(true);
  const { theme } = useTheme();

  const t = useTranslations("Login");
  const router = useRouter();

  useEffect(() => {
    if (theme === "dark") {
      setIsDark(false);
    } else {
      setIsDark(true);
    }
  }, [theme]);

  const FormAction = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    try {
      const response = await fetch("/login/api", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        router.push("/");
      } else {
        alert(data.error);
      }
    } catch (err) {
      alert("error");
    }
  };

  return (
    <div
      className={`flex flex-col bg-gray-200 dark:bg-slate-700  justify-center items-center h-screen bg-[url('/images/login/movie-bg-light.jpg')]
      dark:bg-[url('/images/login/movie-bg-dark.jpg')] dark:bg-top-right dark:bg-no-repeat bg-no-repeat 
    	 contain ${fira_sans.className}`}
    >
      <div className="flex items-center mb-4 w-[700px] ">
        <ThemeSwitch />
        <LocalSwitcher />
      </div>
      <div className="mb-4 ">
        <h1
          className={`text-3xl font-bold text-center text-black uppercase  dark:text-white ${arvo.className}`}
        >
          {t("welcome")}{" "}
        </h1>
        <p className={`text-2xl text-black dark:text-white mt-4 font-normal`}>
          {t("login")}
        </p>
      </div>

      <div className=" flex">
        <div className="flex relative">
          <Image
            className="w-[700px] h-[450px] object-cover rounded-[50px]  shadow-xl  "
            src="/images/login/login.jpg"
            width={400}
            height={400}
            alt="login"
          />
          <div className="absolute right-[-10%] translate-x-[50%] top-8  ">
            <form
              onSubmit={FormAction}
              autoComplete="off"
              className="flex flex-col items-center  bg-[rgba(188,160,116,0.9)]  dark:bg-[rgba(0,0,0,0.8)]  w-80 h-96 rounded-[50px]  shadow-lg shadow-[#e2ba80]	dark:shadow-[#b7b3b36f] 
              "
            >
              <div className="mt-8 text-center">
                <p className="dark:text-white text-2xl my-2 font-bold ">
                  {t("signin")}
                </p>
              </div>
              <label className="relative" htmlFor="username">
                <div className="w-4 h-4 object-cover absolute top-9 right-24">
                  {isDark ? <FaUser /> : <FaRegUser />}
                </div>
              </label>
              <input
                className="rounded w-60 outline-none transition hover:border-slate-900 dark:border-b-white pl-8 py-2  my-6 border-b border-b-black placeholder:text-black dark:placeholder:text-white bg-transparent "
                type="text"
                id="username"
                name="username"
                placeholder={t("name")}
                spellCheck="false"
                autoComplete="off"
                required
              />
              <label className=" relative  " htmlFor="password">
                <div className="w-4 h-4 object-cover absolute top-3 right-24">
                  {isDark ? <RiLockPasswordFill /> : <RiLockPasswordLine />}
                </div>
              </label>
              <input
                className="rounded w-60 outline-none pl-8 py-2 placeholder:text-black dark:border-b-white dark:placeholder:text-white transition hover:border-slate-900  border-b border-b-black bg-transparent"
                type="password"
                id="password"
                name="password"
                placeholder={t("password")}
                autoComplete="off"
                required
              />

              <button
                className="  bg-black dark:bg-gray-200 dark:text-black transition  py-2 w-32 rounded my-16 text-lg hover:bg-slate-800  text-white "
                type="submit"
              >
                {t("button")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
