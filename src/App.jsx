import React from "react";
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import HomePage from "./pages/homePage/HomePage";
import RootLayout from "./components/layout/RootLayout";
import Profile from "./pages/profile/Profile";
import Blog from "./pages/blog/Blog";

function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
    {/* <Header />
    <Search /> */}
        {/* <Footer /> */}
    </BrowserRouter>
  );
}   

export default App;
