import React, { useState, useEffect } from "react";

import apiURL from '../api';

export const DeletePage = ({
  deletePage: deletePage,
  setDeletePage: setDeletePage,
  fetchItems: fetchItems,
  fetchSauces:fetchSauces
}) => {

async function deleteItem(id){
    const response = await fetch(`${apiURL}/items/${id}`, {
        method: 'DELETE'
    })
    fetchItems()
    setDeletePage(null)
    const data = await response.json()
    console.log(data)
};
async function deleteSauce(id){
    const response = await fetch(`${apiURL}/sauces/${id}`, {
        method: 'DELETE'
    })
    fetchSauces()
    setDeletePage(null)
    const data = await response.json()
    console.log(data)
};
  return <>
    <h1>Are You Sure You Want to Delete this</h1>
    <button onClick={() => deletePage.title? deleteItem(deletePage.id):deleteSauce(deletePage.id)}>Yes</button>
    <button onClick={() => setDeletePage(null)}>No</button>


  </>;
};
