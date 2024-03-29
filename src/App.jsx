import React, { useState } from "react";
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import HomePage from "./pages/homePage/HomePage";
import RootLayout from "./components/layout/RootLayout";
import Profile from "./pages/profile/Profile";
import Blog from "./pages/blog/Blog";
import { productsData } from "./data/productsData";



function App() {

  const [itemsData, setItemsData] = useState(productsData)
  const [isSorted, setIsSorted] = useState(false)

  const handleSort = () => {
    setIsSorted(!isSorted)

    isSorted ? setItemsData(productsData) 
    : setItemsData((prevData) => [...prevData].sort((a,b) => a.price - b.price))

  }

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<RootLayout onSort={handleSort} />}>
          <Route path="/" element={<HomePage itemsData={itemsData} />} />
          <Route path="profile" element={<Profile />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}   

export default App;
