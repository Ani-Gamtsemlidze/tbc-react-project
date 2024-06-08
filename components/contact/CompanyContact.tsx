import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMarkEmailRead } from "react-icons/md";

import Link from "next/link";

interface ContactItemProps {
  icon: JSX.Element;
  text: string;
  link: string;
  iconLink: string;
  label: string;
}

function ContactItem({ icon, text, label, iconLink }: ContactItemProps) {
  return (
    <Link href={iconLink} className="my-6 flex items-center text-left ">
      {icon}
      <div className="cursor-pointer font-serif text-base md:text-lg ml-4">
        {text}
        <span className="block text-xs uppercase ">{label}</span>
      </div>
    </Link>
  );
}

export default function CompanyContact() {
  const contactItems: ContactItemProps[] = [
    {
      icon: <MdOutlineMarkEmailRead className="text-3xl" />,
      text: "vegan.vibes@gmail.com",
      link: "https://mail.google.com/",
      iconLink: "https://mail.google.com/",
      label: "email",
    },
    {
      icon: <LuPhone className="text-2xl" />,
      text: "+995 555 55 55 55",
      link: "tel:+995 555 55 55 55",
      iconLink: "tel:+995 555 55 55 55",
      label: "phone",
    },
    {
      icon: <CiFacebook className="text-3xl" />,
      text: "veganVibes",
      link: "https://www.facebook.com/",
      iconLink: "https://www.facebook.com/",
      label: "facebook",
    },
    {
      icon: <FaXTwitter className="text-2xl" />,
      text: "vegan.vibes",
      link: "https://twitter.com/",
      iconLink: "https://twitter.com/",
      label: "twitter",
    },
  ];

  return (
    <div className="col-span-4 px-8 py-10  text-gray-800 md:col-span-2 md:border-r md:px-10 md:py-12 lg:col-span-1">
      <h2 className="mb-8 text-2xl font-bold text-greenColor">Contact us</h2>
      <ul className="flex  flex-col justify-center">
        {contactItems.map((item, index) => (
          <ContactItem key={index} {...item} />
        ))}
      </ul>
    </div>
  );
}
