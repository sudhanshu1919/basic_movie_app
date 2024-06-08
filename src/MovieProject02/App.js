import React, { useContext, createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Movies from "./Movies/Movies";
import Singlemovie from "./Singlemovie/Singlemovie";
import Leayout from "./Leayout/Leayout";
import Footer from "./Footer/Footer";
import Nopage from "./Nopage/Nopage";
import Data from "./Data.json";
import { useEffect } from "react";

export const UserContext = createContext();

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const [data, setFilteredData] = useState(Data);
  const handleSearchChange = (event) => {
    const inputValue = event.toLowerCase();
    setSearchQuery(inputValue);
    const filteredResults = Data.filter((item) =>
      item.Name.toLowerCase().includes(inputValue)
    );
    // console.log(filteredResults)
    setFilteredData(filteredResults);
  };

  return (
    <>
      <UserContext.Provider value={{ data, handleSearchChange }}>
        <BrowserRouter>
          <Leayout />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route index element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Movies" element={<Movies />} />
            <Route path="/Singlemovie" element={<Singlemovie />} />
            <Route path="*" element={<Nopage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
