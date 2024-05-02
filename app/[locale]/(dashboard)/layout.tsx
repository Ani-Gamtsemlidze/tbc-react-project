import { unstable_setRequestLocale } from "next-intl/server";
import Footer from "../../../components/layout/Footer";
import Header from "../../../components/layout/Header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export default function dashboardLayout({ children, params }: LayoutProps) {
  unstable_setRequestLocale(params.locale);
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  );
}
