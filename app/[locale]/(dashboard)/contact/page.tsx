// import { useTranslations } from "next-intl";

import CompanyContact from "../../../../components/contact/CompanyContact";

import { unstable_setRequestLocale } from "next-intl/server";
import ContactForm from "../../../../components/contact/ContactForm";

interface Params {
  params: {
    locale: string;
  };
}

export default function Contact({ params }: Params) {
  unstable_setRequestLocale(params.locale);

  // const t = useTranslations("Contact");

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [question, setQuestion] = useState("");

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const subject = `Question from ${name}`;
  //   const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AQuestion:%0D%0A${question}`;
  //   const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(
  //     subject
  //   )}&body=${encodeURIComponent(body)}`;
  //   window.location.href = mailtoLink;
  // };

  return (
    <div className="sm:p-10 my-auto bg-mainBackground">
      <section className="mx-auto bg-white max-w-screen-xl md:rounded-md md:border md:shadow-lg">
        <div className="grid grid-cols-4 text-gray-800 lg:grid-cols-3">
          <CompanyContact />
          <ContactForm />

          {/* <div className="order-first col-span-4 max-w-screen-md px-8 py-10 md:order-last md:col-span-2 md:px-10 md:py-12">
            <h2 className="mb-8 text-2xl font-black">Get in touch</h2>
            <p className="mt-2 mb-4 font-sans text-sm tracking-normal">
              Don't be shy to ask us a question.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="md:col-gap-4 mb-5 grid md:grid-cols-2">
                <input
                  className="col-span-1 w-full border-b py-3 text-sm outline-none focus:border-b-2 focus:border-black"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="col-span-1 ml-3 w-full border-b py-3 text-sm outline-none focus:border-b-2 focus:border-black"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <textarea
                className="mb-10 w-full resize-y whitespace-pre-wrap border-b py-3 text-sm outline-none focus:border-b-2 focus:border-black"
                placeholder="Question"
                name="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              ></textarea>
              <button
                type="submit"
                className="group flex cursor-pointer items-center rounded-xl bg-blue-600 bg-none px-8 py-4 text-center font-semibold leading-tight text-white"
              >
                Send
                <VscSend className="w-8 h-8 text-white object-cover group-hover:ml-8 ml-4 transition-all" />
              </button>
            </form>
          </div> */}
        </div>
      </section>
    </div>
  );
}
