import { useTranslations } from "next-intl";
import ContactForm from "../../../../components/contact/ContactForm";
import CompanyContact from "../../../../components/contact/CompanyContact";
import { unstable_setRequestLocale } from "next-intl/server";

interface Params {
  params: {
    locale: string;
  };
}

export default function Contact({ params }: Params) {
  unstable_setRequestLocale(params.locale);

  const t = useTranslations("Contact");
  return (
    <div className="bg-gray-200 dark:bg-slate-500 flex flex-1 p-8 justify-center">
      <form action="/submit-form">
        <div className=" bg-gray-100 p-8  w-[550px]">
          <h1 className="text-xl font-medium">{t("message")}</h1>
          <ContactForm
            type="text"
            label={t("name-label")}
            placeholder={t("name")}
            id="fullName"
          />
          <ContactForm
            type="text"
            label={t("email-label")}
            placeholder={t("email")}
            id="Email"
          />
          <ContactForm
            type="text"
            label={t("subject")}
            placeholder={t("subject")}
            id="subject"
          />
          <ContactForm
            type="textarea"
            label={t("textarea")}
            id="textarea"
            placeholder={t("message")}
          />

          <button
            className="bg-gray-800 hover:bg-gray-900 transition text-white px-4 py-2 rounded w-36 mt-4 ml-4"
            type="submit"
          >
            {t("send-button")}
          </button>
        </div>
      </form>
      <div className="bg-cyan-600 p-8">
        <h1 className="text-xl font-medium">{t("contact-us")}</h1>
        <CompanyContact
          image="/images/contact/location.png"
          companyInfo="Suite 293 95409 Grimes Crossing"
        />
        <CompanyContact
          image="/images/contact/phone.png"
          companyInfo="638 891 206 "
        />
        <CompanyContact
          image="/images/contact/website.png"
          companyInfo="www.web-site. com"
        />
        <CompanyContact
          image="/images/contact/mail.png"
          companyInfo="pas-uwufuba91@mail.com"
        />
      </div>
    </div>
  );
}
