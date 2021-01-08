import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import SearchBar from "./components/Search/Searchbar";
import SearchResultList from "./components/Search/SearchResults/SearchResultList";
import './App.css';

function App() {
  const [search, setSearch] = useState("");
  const changeSearchValue = (searchResult) => {
    setSearch(searchResult);
  };
  return (
    <div className="App">
       <Header text={"The Shoppies"} />
      <main className="container parent" data-test="component-app">
       
          <Banner text={"You have nominated five movies!"} />
           
          <div className="div1">
          <SearchBar changeSearchValue={changeSearchValue} />
        </div>
        </main>
    </div>
  );
}

export default App;
