// import { useTranslations } from "next-intl";
import { Logo } from "./Logo";
import { ContactItemProps } from "../contact/CompanyContact";
import Link from "next/link";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  // const t = useTranslations("Footer");

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
    <footer className="bg-gray-50">
      <div className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
        <div className="max-w-sm">
          <div className="mb-6 flex h-12 items-center space-x-2">
            <Logo />
          </div>
          <div className="text-gray-500">
            Welcome to Veggie Vibes, where we celebrate vegan living. Our
            mission is to provide delicious, plant-based options that are not
            only good for you but also good for the planet.
          </div>
        </div>
        <div className="">
          <div className="mt-4 mb-2 font-medium xl:mb-4">Address</div>
          <div className="text-gray-500">
            Acme Vegan Foods Inc.
            <br />
            123 Rustaveli Street
            <br />
            Tbilisi, Georgia 54321
            <br />
          </div>
        </div>
        <div className="">
          <div className="mt-4 mb-2 font-medium xl:mb-4">Contact us</div>
          <nav aria-label="Footer Navigation" className="text-gray-500">
            <ul className="space-y-3">
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
        <div className="">
          <div className="mt-4 mb-2 font-medium xl:mb-4">
            Subscribe to our Newsletter
          </div>
          <div className="flex flex-col">
            <div className="mb-4">
              <input
                type="email"
                className="focus:outline mb-2 block h-14 w-full rounded-xl bg-gray-200 px-4 sm:w-80 focus:outline-none focus:ring-1 focus:ring-greenColor"
                placeholder="Enter your email"
              />
              <button className="block rounded-xl bg-greenColor px-6 py-3 font-medium text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
          <div className="">© 2024 Veggie Vibes | All Rights Reserved</div>
          <div className="">
            <a className="" href="#">
              Privacy Policy
            </a>
            <span>|</span>
            <a className="" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
