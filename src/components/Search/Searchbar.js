import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Searchbar.scss";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar({ changeSearchValue }) {
  return (
    <form className="search-form">
<div class="containerbox">
      <input type="text" id="box"  type="text"
        id="movie"
        name="movie" placeholder="Search any Movie" class="search__box"  onChange={(event) => changeSearchValue(event.target.value)}/>
        <FontAwesomeIcon icon={faSearch} className="search__icon" />
  </div>

    </form>
  );
}

export default SearchBar;
