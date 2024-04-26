import Footer from "../../../components/layout/Footer";
import Header from "../../../components/layout/Header";

export default function dashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
