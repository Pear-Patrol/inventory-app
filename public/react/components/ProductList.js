import React from 'react';
import { Product } from './Product';

export const ProductList = ({products}) => {
	return <>
		{
			products.map((products, idx) => {
				return <Product products={products} key={idx} />
			})
		}
	</>
} 
