import { useTranslations } from "next-intl";
import Navigation from "./Navigation";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="flex  justify-between items-center bg-[#B85042]  dark:bg-slate-600 p-4">
      <div className="">
        <Navigation />
        <form action="/submit" className="">
          <div className="mt-2 ">
            <input
              className="pl-2 py-1 rounded-md outline-none bg-[#E7E8D1] placeholder:text-black"
              type="text"
              id="subscribe"
              name="subscribe"
              placeholder={t("email")}
            />
            <button
              className="text-white dark:text-white text-sm ml-2"
              type="submit"
            >
              {t("subscribe")}
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-col flex-end">
        <a href="#" className="text-white dark:text-white text-sm">
          {t("terms")}
        </a>
        <a href="#" className="text-white dark:text-white text-sm mt-2">
          {t("policy")}
        </a>
      </div>
    </footer>
  );
}
