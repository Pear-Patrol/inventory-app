import React from "react";

export const SinglePage = ({ displaySinglePage: displaySinglePage, setDisplaySinglePage: setDisplaySinglePage }) => {
  return (
    <>
      { displaySinglePage.title ? 
        <>
        <h1>{displaySinglePage.title}</h1>
        <p>Price: {displaySinglePage.price}</p>
        <p>Description: {displaySinglePage.description}</p>
        <p>Category: {displaySinglePage.category}</p>
        </>
        :
        <>
        <h1>{displaySinglePage.name}</h1>
        </>
      }
      <img src={displaySinglePage.image} 
        alt={displaySinglePage.title || displaySinglePage.name} />
      <button onClick={() => setDisplaySinglePage(null)}>Back</button>
    </>
  );
};