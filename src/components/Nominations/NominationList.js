import React from "react";
import NominationListItem from "./NominationListItem";

function NominationList({ nominations, removeNomination }) {
  let res = nominations.map((movie, id) => {
    return (
      <NominationListItem
        key={movie.id}
        movie={movie}
        index={id}
        removeNomination={removeNomination}
      />
    );
  });

  return <>{res}</>;
}

export default NominationList;
