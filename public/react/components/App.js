import React, { useState, useEffect } from 'react';
import { SaucesList } from './SaucesList';
import { ItemList } from './ItemList';
import { AddPage } from './AddPage';
import { SinglePageItem } from './SinglePageItem';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [sauces, setSauces] = useState([]);
	const [items, setItems] = useState([]);
	const [displayAddPage, setDisplayAddPage] = useState(false)
	const [displaySinglePageItem, setDisplaySinglePageItem] = useState(null)
	const [displaySinglePageSauce, setDisplaySinglePageSauce] = useState(null)

	async function fetchSauces() {
		try {
			const response = await fetch(`${apiURL}/sauces`);
			const saucesData = await response.json();

			setSauces(saucesData);
		} catch (err) {
			console.log("Oh no an error in fetchSauces! ", err)
		}
	}
	async function fetchItems() {
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();

			setItems(itemsData);
		} catch (err) {
			console.log("Oh no an error in fetchProducts! ", err)
		}
	}
	async function fetchSingleItem(id) {
		try {
			const response = await fetch(`${apiURL}/items/${id}`);
			const singleItemData = await response.json();

			setDisplaySinglePageItem(singleItemData);
		} catch (err) {
			console.log("Oh no an error in fetchSingleItem! ", err)
		}
	}
	async function fetchSingleSauce(id) {
		try {
			const response = await fetch(`${apiURL}/sauces/${id}`);
			const singleSauceData = await response.json();

			setDisplaySinglePageItem(singleSauceData);
		} catch (err) {
			console.log("Oh no an error in fetchSingleSauce! ", err)
		}
	}

	useEffect(() => {
		fetchSauces();
		fetchItems();
	}, []);

	return (
		<main>
			{
				displayAddPage ? (
					<AddPage setDisplayAddPage={setDisplayAddPage} fetchItems={fetchItems} fetchSauces={fetchSauces} />
				) :
				displaySinglePageItem ? (
					<SinglePageItem displaySinglePageItem={displaySinglePageItem} setDisplaySinglePageItem={setDisplaySinglePageItem} />
				) :
				displaySinglePageSauce ? (
					<SinglePageSauce displaySinglePageSauce={displaySinglePageSauce} setDisplaySinglePageSauce={setDisplaySinglePageSauce} />
				) :
					(<>
						<h1>Sauce Store</h1>
						<h2>All things 🔥</h2>
						<br></br>
						<SaucesList sauces={sauces} fetchSingleSauce={fetchSingleSauce}/>
						<ItemList items={items} fetchSingleItem={fetchSingleItem}/>
						<button onClick={()=>setDisplayAddPage(true)}>Add Something!</button>
					</>)}
		</main>
	)
}