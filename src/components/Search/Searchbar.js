import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Searchbar.scss";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar({ changeSearchValue }) {
  return (


    <form className="search-form">
<div class="containerbox">
    
<input
        placeholder="Search Movies"
        className="Barstyling"
        type="text"
        id="movie"
        name="movie"
        onChange={(event) => changeSearchValue(event.target.value)}
      />
  </div>

    </form>
  );
}

export default SearchBar;
