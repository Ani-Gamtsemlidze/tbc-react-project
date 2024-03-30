  import React, { useCallback, useState } from "react";
  import { BrowserRouter, Route, Routes } from "react-router-dom";
  import "./App.css"
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
       if(isSorted) {
        setItemsData(isFiltered ? filteredItems : productsData) 
       } else {
        const sortedItems = [...itemsData].sort((a,b) => a.price - b.price)
        setItemsData(sortedItems)
       }
    }

      const debounce = (func, delay) => {
        let timerId;  
        return (...args) => {
          clearTimeout(timerId)
          timerId = setTimeout(() => {
            func(...args)}, delay )
        }
      }

      const debounceSearch = useCallback(
        debounce((searchQuery) => {
          const priceSearch = Number(searchQuery);
          
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
      const searchQuery = e.target.value;
      setSearchItem(searchQuery);
      debounceSearch(searchQuery);
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
