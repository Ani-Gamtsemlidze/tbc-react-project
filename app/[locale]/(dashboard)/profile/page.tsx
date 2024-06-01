import { unstable_setRequestLocale } from "next-intl/server";
import { getPicture } from "../../../../user-api";
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

  const pictureUrl = await getPicture(user?.sub);

  return (
    <section className="flex  h-screen bg-gray-200 dark:bg-slate-500  items-center justify-center ">
      <div className="flex justify-center">
        <div className="flex  w-96 p-4 gap-2">
          <UserInfo picture={pictureUrl[0].picture} />
        </div>
        <ProfileForm />
      </div>
    </section>
  );
}
