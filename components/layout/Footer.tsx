import { useTranslations } from "next-intl";
import { Logo } from "./Logo";
import { ContactItemProps } from "../contact/CompanyContact";
import Link from "next/link";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const t = useTranslations("Footer");

  const contactItems: ContactItemProps[] = [
    {
      icon: <MdOutlineMarkEmailRead className="text-xl mr-2" />,
      text: "vegan.vibes@gmail.com",
      link: "https://mail.google.com/",
      iconLink: "https://mail.google.com/",
    },
    {
      icon: <LuPhone className="text-lg mr-2" />,
      text: "+995 555 55 55 55",
      link: "tel:+995 555 55 55 55",
      iconLink: "tel:+995 555 55 55 55",
    },
    {
      icon: <CiFacebook className="text-xl mr-2" />,
      text: "veganVibes",
      link: "https://www.facebook.com/",
      iconLink: "https://www.facebook.com/",
    },
    {
      icon: <FaXTwitter className="text-lg mr-2" />,
      text: "vegan.vibes",
      link: "https://twitter.com/",
      iconLink: "https://twitter.com/",
    },
  ];

  return (
    <footer className="bg-gray-300 dark:bg-darkContentColor ">
      <div className="mx-auto  max-w-[1200px] flex justify-between space-between items-start py-14 px-5 max-sm:flex-col gap-y-8 gap-x-12  md:grid-cols-2 xl:grid-cols-4 xl:px-10">
        <div className="max-w-sm">
          <div className="mb-6 flex h-12 items-center space-x-2">
            <Logo />
          </div>
          <div className="text-gray-500 dark:text-darkTextColor">
            {t("welcome")}
          </div>
        </div>
        <div className="">
          <div className="mt-4 mb-2 font-medium xl:mb-4">{t("address")}</div>
          <div className="text-gray-500 dark:text-darkTextColor">
            Acme Vegan Foods Inc.
            <br />
            {t("address2")}
            <br />
            {t("address3")}
            <br />
          </div>
        </div>
        <div className="">
          <div className="mt-4 mb-2 font-medium xl:mb-4">{t("contact")}</div>
          <nav aria-label="Footer Navigation" className="text-gray-500">
            <ul className="space-y-3 dark:text-darkTextColor">
              {contactItems.map((item, index) => (
                <li className="flex items-center" key={index}>
                  {item.icon}
                  <Link
                    href={item.link}
                    className="hover:text-greenColor hover:underline flex items-center"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-darkBgColor">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
          <div className="dark:text-darkTextColor">
            © 2024 Veggie Vibes | {t("rights")}
          </div>
          <div className="dark:text-darkTextColor">
            <span className="">{t("privacy")} | </span>
            <span className="">{t("terms")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
