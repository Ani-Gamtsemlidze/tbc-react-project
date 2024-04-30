import Link from "next/link";
import Image from "next/image";
import Navigation from "./Navigation";
import LogoutBtn from "../logout/LogoutBtn";
import LocalSwitcher from "../langSwitcher/LocalSwitcher";
import ThemeSwitch from "../theme/ThemeSwitch";
// import { RiSearch2Line } from "react-icons/ri";

export default function Header() {
  return (
    <>
      {/* <div className="bg-white dark:bg-slate-700 flex p-2 items-center"> */}
      {/* <p className="mx-auto text-black">
          Free Shipping and Returns on orders of $125 +
        </p> */}

      {/* </div> */}
      <header className="flex  justify-between items-center bg-[#F6F3EC] dark:bg-slate-600 py-1 px-8">
        <div className="flex items-center">
          <Link className="" href="/">
            <Image
              alt="X-logo"
              className="w-16 h-16 object-contain mr-4"
              src="/images/logo.png"
              width={400}
              height={400}
            />
          </Link>
          <Navigation />
        </div>
        <div className="flex items-center justify-center">
          {/* <RiSearch2Line /> */}
          <ThemeSwitch />
          <LocalSwitcher />
          <LogoutBtn />
        </div>
      </header>
    </>
  );
}
