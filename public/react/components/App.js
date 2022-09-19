import React, { useState, useEffect } from 'react';
import { SaucesList } from './SaucesList';
import { ProductList } from './ProductList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [sauces, setSauces] = useState([]);
	const [products, setProducts] = useState([]);

	async function fetchSauces(){
		try {
			const response = await fetch(`${apiURL}/sauces`);
			const saucesData = await response.json();
			
			setSauces(saucesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}
	async function fetchProducts(){
		try {
			const response = await fetch(`${apiURL}/products`);
			const productsData = await response.json();
			
			setProducts(productsData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchSauces();
		fetchProducts();
	}, []);

	return (
		<main>	
      <h1>Sauce Store</h1>
			<h2>All things 🔥</h2>
			<br></br>
			<SaucesList sauces={sauces} />
			<ProductList products={products}/>
		</main>
	)
}