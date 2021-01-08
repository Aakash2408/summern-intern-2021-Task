import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import SearchBar from "./components/Search/Searchbar";
import SearchResultList from "./components/Search/SearchResults/SearchResultList";
import NominationListHolder from "./components/Nominations/NominationListHolder";
import "./App.scss";
import { fetchList } from "./api";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  //Custom hook to store nominations in local storage
  const [localStorage, setLocalStorage] = useLocalStorage("nominations", []);
  //Checks if local storage has nomination data else it will just start as an empty array
  const [nominations, setNominations] = useState(localStorage);
  const [bannerStatus, setBannerStatus] = useState(false);

  const changeSearchValue = (searchResult) => {
    setSearch(searchResult);
  };

  const addNomination = (movie) => {
    const movieObj = { id: movie.imdbID, movie };
    setNominations([...nominations, movieObj]);
  };

  const removeNomation = (imdbID) => {
    const filteredNominations = nominations.filter((nomination) => {
      return nomination.movie.imdbID !== imdbID;
    });
    setNominations(filteredNominations);
  };

  const changeNominationOrder = (nomination) => {
    setLocalStorage(nomination);
  };

  useEffect(() => {
    async function searchOMDB() {
      const movieList = await fetchList(search);
      setSearchResults(movieList);
    }
    searchOMDB();
  }, [search]);

  useEffect(() => {
    nominations.length >= 5 ? setBannerStatus(true) : setBannerStatus(false);
  }, [nominations]);

  return (
    <>
      <Header text={"The Shoppies"} />
      <main className="container parent" data-test="component-app">
        {bannerStatus && (
          <Banner text={"You have nominated five movies!"} />
        )}
        <div className="div1">
          <SearchBar changeSearchValue={changeSearchValue} />
        </div>
        <div className="div2">
          <SearchResultList
            searchTerms={search}
            results={searchResults}
            nominate={addNomination}
            nominations={nominations}
          />
        </div>
        <div className="div3">
          <NominationListHolder
            nominations={nominations}
            removeNomination={removeNomation}
            changeNominationOrder={changeNominationOrder}
          />
        </div>
      </main>
    </>
  );
}

export default App;
