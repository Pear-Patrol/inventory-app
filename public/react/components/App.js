import React, { useState, useEffect } from 'react';
import { SaucesList } from './SaucesList';
import { ItemList } from './ItemList';
import { AddPage } from './AddPage';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [sauces, setSauces] = useState([]);
	const [items, setItems] = useState([]);
	const [displayAddPage, setDisplayAddPage] = useState(false)

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

					(<>

						<h1>Sauce Store</h1>
						<h2>All things 🔥</h2>
						<br></br>
						<SaucesList sauces={sauces} />
						<ItemList items={items} />
						<button onClick={()=>setDisplayAddPage(true)}>Add Something!</button>

					</>)}
		</main>
	)
}