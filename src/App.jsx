  import React, { useCallback, useState } from "react";
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
    const [filteredItems, setFilteredItems] = useState([])

    const [isFiltered, setIsFiltered] = useState(false)
    const [isSorted, setIsSorted] = useState(false)
    
    const [searchItem, setSearchItem] = useState("")

    const handleSort = () => {
      setIsSorted(!isSorted)
      isSorted ? setItemsData(isFiltered ? filteredItems : productsData) 
      : setItemsData((prevData) => [...prevData].sort((a,b) => a.price - b.price))
    }

      const debounce = (func, delay) => {
        let timerId;  
        return (...args) => {
          clearTimeout(timerId)
          timerId = setTimeout(() => {

            func(...args)}, delay )
        }
      }

      const onInput = useCallback(
        debounce((searchQuery) => {
          const priceSearch = parseFloat(searchQuery);
          
          const filtered = productsData.filter((item) =>
            Object.values(item).some((value) =>
              typeof value === "string"
                ? value.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
                : !isNaN(priceSearch) && item.price === priceSearch
            )
          );
          setFilteredItems(filtered)
          setIsFiltered(true)
          setItemsData(filtered);
        }, 500),
        []
      );

    const handleSearch = (e) => {
      const searchQuery = e.target.value
      setSearchItem(searchQuery)
      onInput(searchQuery)
    }

    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout  />}>
            <Route path="/" element={<HomePage itemsData={itemsData}  onSort={handleSort} searchItem={searchItem} onSearch={handleSearch} />} />
            <Route path="profile" element={<Profile />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      </BrowserRouter>
    );
  }   

  export default App;
