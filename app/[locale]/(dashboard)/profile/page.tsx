import { unstable_setRequestLocale } from "next-intl/server";
import { getUser } from "../../../../user-api";
import { getSession } from "@auth0/nextjs-auth0";
import UserInfo from "../../../../components/profile/UserInfo";
import ProfileForm from "../../../../components/profile/ProfileForm";
import { Metadata } from "next";

interface Params {
  params: {
    locale: string;
  };
}

export const metadata: Metadata = {
  title: "Veggie User- Veggie Vibes",
  description: "Explore and manage your profile on Veggie Vibes",
};

export default async function Profile({ params }: Params) {
  unstable_setRequestLocale(params.locale);
  const session = await getSession();
  const user = session?.user;

  const userData = await getUser(user?.sub);

  return (
    <section className="flex justify-center bg-mainColor h-screen dark:bg-darkContentColor ">
      <div className="flex  ">
        <div className="flex  w-96 p-4 gap-12">
          <UserInfo userData={userData} />
        </div>
        <ProfileForm userData={userData} />
      </div>
    </section>
  );
}
