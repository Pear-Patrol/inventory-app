import React from 'react';
import { Item } from './Item';

export const ItemList = ({items, fetchSingleItem}) => {
	return <>
	{
			items.map((items, idx) => {
				return <Item items={items} fetchSingleItem={fetchSingleItem} key={idx} />
			})
		}
		
	</>
} 
