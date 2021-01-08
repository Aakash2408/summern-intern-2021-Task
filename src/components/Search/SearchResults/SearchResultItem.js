import React from "react";
import "./SearchResultItem.scss";
import placeholderImage from "../../../placeholder.png";

function SearchResultItem({ movie, nominate, picked }) {
  return (
    <div className="result__item">
      <img
        className="result__picture"
        alt={`Poster for ${movie.Title}`}
        src={movie.Poster !== "N/A" ? movie.Poster : placeholderImage}
      />
      <div className="result__text">
        <a
          href={`https://www.imdb.com/title/${movie.imdbID}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="result__url"
        >
          {movie.Title}
        </a>{" "}
        ({movie.Year})
        </div>
        <button
          className="button result__button result__button--center "
          disabled={picked}
          onClick={() => nominate(movie)}
        >
            Nominate
        </button>
    </div>
  );
}

export default SearchResultItem;
