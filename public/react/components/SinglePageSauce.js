import React from "react"

export const SinglePageSauce = ({ displaySinglePageSauce: displaySinglePageSauce, setDisplaySinglePageSauce: setDisplaySinglePageSauce }) => {
  return (
    <>
      <h1>{displaySinglePageSauce.name}</h1>
      <img src={displaySinglePageSauce.image} alt={displaySinglePageSauce.name} />
      <button onClick={() => setDisplaySinglePageSauce(null)}>Back</button>
    </>
  );
};