import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import LandingPage from "./components/landing/LandingPage";
import Search from "./components/search/Search";

function App() {
  return (
    <>
    <main className="flex min-h-screen flex-col ">
      <Header />
      <Search />
      <LandingPage />
      <Footer />
    </main>
    </>
  );
}

export default App;
