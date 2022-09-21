import React from "react";

export const SinglePage = ({ isEditing, displaySinglePage: displaySinglePage, setDisplaySinglePage: setDisplaySinglePage, setDeletePage }) => {
 
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
      <button onClick={() => isEditing(displaySinglePage)}>Edit</button>
      <button onClick={() => {setDeletePage(displaySinglePage); setDisplaySinglePage(null)}}>Delete</button>
    </>
  );
};