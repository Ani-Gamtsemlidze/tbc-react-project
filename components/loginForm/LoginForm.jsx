"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ThemeSwitch from "../theme/ThemeSwitch";
import LocalSwitcher from "../langSwitcher/LocalSwitcher";
import { useTranslations } from "next-intl";

export default function LoginForm() {
  const t = useTranslations("Login");
  const router = useRouter();
  const FormAction = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

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
    <div className="bg-gray-200 dark:bg-slate-700   h-screen flex justify-center items-center ">
      <div className=" flex flex-col items-center ">
        <div className="flex mb-2">
          <ThemeSwitch />
          <LocalSwitcher />
        </div>
        <div className="bg-black w-80 rounded-t-lg	 ">
          <Image
            className="mx-auto my-2"
            src="/images/X-Logo.png"
            width={40}
            height={40}
            alt="logo"
          />
        </div>

        <form
          onSubmit={FormAction}
          autoComplete="off"
          className="flex flex-col items-center bg-white dark:bg-slate-600 w-80  rounded-b-lg	"
        >
          <div className="mt-10 mb-2 text-center">
            <h1 className="font-bold dark:text-white ">{t("login")}</h1>
            <p className="dark:text-white ">{t("signin")}</p>
          </div>
          <label className="relative" htmlFor="username">
            <div className="w-4 h-4 object-cover absolute top-9 right-24">
              <Image
                className=""
                src="/images/login/email.png"
                width={100}
                height={100}
                alt="email"
              />
            </div>
          </label>
          <input
            className="rounded w-60 outline-none transition hover:border-slate-900 pl-8 py-2  my-6 border "
            type="text"
            id="username"
            name="username"
            placeholder={t("name")}
            spellCheck="off"
            autoComplete="off"
            required
          />
          <label className=" relative  " htmlFor="password">
            <div className="w-4 h-4 object-cover absolute top-3 right-24">
              <Image
                className=""
                src="/images/login/padlock.png"
                width={100}
                height={100}
                alt="name"
              />
            </div>
          </label>
          <input
            className="rounded w-60  outline-none pl-8 py-2 border transition hover:border-slate-900 "
            type="password"
            id="password"
            name="password"
            placeholder={t("password")}
            autoComplete="off"
            required
          />

          <button
            className="  bg-slate-700   transition  py-2 w-48 rounded my-8 text-lg hover:bg-black text-white "
            type="submit"
          >
            {t("button")}
          </button>
        </form>
      </div>
    </div>
  );
}
