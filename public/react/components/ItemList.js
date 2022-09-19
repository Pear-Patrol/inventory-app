import React from 'react';
import { Item } from './Item';

export const ItemList = ({items}) => {
	return <>
		{
			items.map((items, idx) => {
				return <Item items={items} key={idx} />
			})
		}
	</>
} 
