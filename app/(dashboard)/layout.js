import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RootLayout({ children }) {


  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />

      {children}
      <Footer />
    </div>
  );
}
