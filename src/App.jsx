import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import LandingPage from "./components/landing/LandingPage";
import BlogPage from "./components/blog/BlogPage";

function App() {
  return (
    <div className="main-container">
      <Header />
      <LandingPage />
      <BlogPage />
      <Footer />
    </div>
  );
}

export default App;
