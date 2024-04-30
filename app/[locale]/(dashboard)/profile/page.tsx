import { useTranslations } from "next-intl";
import ProfileForm from "../../../../components/profileForm/ProfileForm";

import { unstable_setRequestLocale } from "next-intl/server";

interface Params {
  params: {
    locale: string;
  };
}

export default function Profile({ params }: Params) {
  unstable_setRequestLocale(params.locale);

  const t = useTranslations("Profile");
  const inputData = [
    { type: "text", id: "username", placeholder: t("username") },
    { type: "text", id: "surname", placeholder: t("surname") },
    { type: "text", id: "email", placeholder: t("email") },
    { type: "password", id: "password", placeholder: t("password") },
    {
      type: "password",
      id: "confirmPassword",
      placeholder: t("confirmPass"),
    },
  ];

  return (
    <section className="flex flex-1 bg-gray-200 dark:bg-slate-500 justify-center p-4">
      <form className="flex flex-col bg-[#B85042]  dark:bg-slate-600 w-96 p-4 gap-2">
        {inputData.map((input) => (
          <ProfileForm
            key={input.id}
            type={input.type}
            id={input.id}
            placeholder={input.placeholder}
          />
        ))}

        <button
          className=" hover:bg-slate-300 bg-slate-200   dark:bg-slate-500 transition px-4 py-2  mx-auto mt-8"
          type="submit"
        >
          {t("button")}
        </button>
      </form>
    </section>
  );
}
