import React, { useState, useEffect } from 'react';
import { SaucesList } from './SaucesList';
import { ItemList } from './ItemList';
import { AddPage } from './AddPage';
import { SinglePage } from './SinglePage';
import {EditPage} from './EditPage';
import { DeletePage } from './DeletePage';
import {Sidebar} from './Sidebar';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [sauces, setSauces] = useState([]);
	const [items, setItems] = useState([]);
	const [displayAddPage, setDisplayAddPage] = useState(false)
	const [displaySinglePage, setDisplaySinglePage] = useState(null)
	const [editing, setEditing] = useState(false);
	const [toEdit, setToEdit] = useState(null)
	const [deletePage, setDeletePage] = useState(null)
	

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

			setDisplaySinglePage(singleItemData);
		} catch (err) {
			console.log("Oh no an error in fetchSingleItem! ", err)
		}
	}
	async function fetchSingleSauce(id) {
		try {
			const response = await fetch(`${apiURL}/sauces/${id}`);
			const singleSauceData = await response.json();
			
			console.log(singleSauceData)

			setDisplaySinglePage(singleSauceData);
		} catch (err) {
			console.log("Oh no an error in fetchSingleSauce! ", err)
		}
	}
	function isEditing(product){
		setEditing(!editing);
		setDisplaySinglePage(null)
		setToEdit(product)
		console.log(product)
	}


	useEffect(() => {
		fetchSauces();
		fetchItems();
	}, []);

	return (
		<main>
			<div>
				<Sidebar />
			</div>
			<div className='main'>
			{
				displayAddPage ? (
					<AddPage setDisplayAddPage={setDisplayAddPage} fetchItems={fetchItems} fetchSauces={fetchSauces} />
				) :
				displaySinglePage ? (
					<SinglePage isEditing={isEditing} setDeletePage={setDeletePage} displaySinglePage={displaySinglePage} setDisplaySinglePage={setDisplaySinglePage} />
				): editing ? (<EditPage fetchSauces={fetchSauces} fetchItems={fetchItems} toEdit={toEdit} setEditing={setEditing}/>)
					:deletePage?(<DeletePage fetchSauces={fetchSauces} fetchItems={fetchItems} deletePage={deletePage} setDeletePage={setDeletePage}/>):(<>
						<SaucesList sauces={sauces} fetchSingleSauce={fetchSingleSauce}/>
						<ItemList items={items} fetchSingleItem={fetchSingleItem}/>
						<button onClick={()=>setDisplayAddPage(true)}>Add Something!</button>
					</>)}
			</div>
			
		</main>
	)
}