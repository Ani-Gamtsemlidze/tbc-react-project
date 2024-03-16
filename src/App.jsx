import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import LandingPage from "./components/landing/LandingPage";

function App() {
  return (
    <main className="flex h-screen flex-col  justify-between ">
      <Header />
      <LandingPage />
      <Footer />
    </main>
  );
}

export default App;
