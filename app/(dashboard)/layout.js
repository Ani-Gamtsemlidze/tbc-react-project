import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AUTH_COOKIE } from "@/constants";

export default function dashboardLayout({ children }) {
  // const cookieStore = cookies()
  // const cookie = cookieStore.get(AUTH_COOKIE);

  // if (!cookie?.value) {
  //   redirect("/login");
  // }

  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
