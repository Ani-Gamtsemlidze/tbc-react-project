import { unstable_setRequestLocale } from "next-intl/server";
import { getUser } from "../../../../user-api";
import { getSession } from "@auth0/nextjs-auth0";
import UserInfo from "../../../../components/profile/UserInfo";
import ProfileForm from "../../../../components/profile/ProfileForm";

interface Params {
  params: {
    locale: string;
  };
}

export const revalidate = 0;

export default async function Profile({ params }: Params) {
  unstable_setRequestLocale(params.locale);
  const { user }: any = await getSession();

  // const pictureUrl = await getPicture(user?.sub);

  const userData = await getUser(user?.sub);
  // console.log("USERDATA", userData);

  return (
    <section className="flex justify-center bg-[rgb(255,247,236)] h-screen dark:bg-slate-500 ">
      <div className="flex  ">
        <div className="flex  w-96 p-4 gap-12">
          <UserInfo userData={userData} />
        </div>
        <ProfileForm userData={userData} />
      </div>
    </section>
  );
}
