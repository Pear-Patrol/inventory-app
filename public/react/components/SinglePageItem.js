import React from "react";

export const SinglePageItem = ({ displaySinglePageItem: displaySinglePageItem, setDisplaySinglePageItem: setDisplaySinglePageItem }) => {
  return (
    <>
      <h1>{displaySinglePageItem.title}</h1>
      <h2>{displaySinglePageItem.price}</h2>
      <h2>{displaySinglePageItem.description}</h2>
      <h2>{displaySinglePageItem.category}</h2>
      <img src={displaySinglePageItem.image} alt={displaySinglePageItem.title} />
      <button onClick={() => setDisplaySinglePageItem(null)}>Back</button>
    </>
  );
};