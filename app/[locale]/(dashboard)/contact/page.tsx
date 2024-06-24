import { unstable_setRequestLocale } from "next-intl/server";
import ContactForm from "../../../../components/contact/ContactForm";
import { Metadata } from "next";
import { CompanyContact } from "../../../../components/contact/CompanyContact";

export interface Params {
  params: {
    locale: string;
  };
}

export const metadata: Metadata = {
  title: "Contact Us- Veggie Vibes",
  description:
    "Contact us for inquiries, support, or any other questions. Fill out our contact form or find our company's contact details.",
};

export default function Contact({ params }: Params) {
  unstable_setRequestLocale(params.locale);

  return (
    <div className="sm:p-10 my-auto bg-mainColor dark:bg-darkBgColor">
      <section className="mx-auto bg-white dark:bg-darkSecondaryColor max-w-screen-xl md:rounded-md md:border md:shadow-lg">
        <div className="grid grid-cols-4 text-gray-800 lg:grid-cols-3">
          <CompanyContact />
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
