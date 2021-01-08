import React from "react";
import SearchResultItem from "./SearchResultItem";
import "./SearchResultList.scss";

function SearchResultList({
  results,
  nominate,
  nominations,
  removeNomination,
  searchTerms,
}) {
  let res = results.map((result, id) => {
    let picked = false;
    if (nominations.length >= 5) {
      picked = true;
    } else {
      nominations.forEach((nominated) => {
        if (nominated.movie.imdbID === result.imdbID) {
          picked = true;
        }
      });
    }
    return (
      <SearchResultItem
        key={id}
        picked={picked}
        movie={result}
        nominate={nominate}
        removeNomination={removeNomination}
      ></SearchResultItem>
    );
  });

  if (searchTerms.length < 1) {
    return (
      <section className="section-result ">
        <h2 className="result__header">Search Results</h2>
        <div className="result__sub-header">Please search for a movie!</div>
        <div className="result__body"></div>
      </section>
    );
  }

  return (
    <section className="section-result ">
      <h2 className="result__header">Search Results</h2>
      <div className="result__sub-header">
        Results for <strong>"{searchTerms}"</strong>
      </div>
      <div className="result__body">{res}</div>
    </section>
  );
}

export default SearchResultList;
