import React from 'react';
import { Sauce } from './Sauce';

export const SaucesList = ({sauces, fetchSingleSauce}) => {
	return <>
		{
			sauces.map((sauce, idx) => {
				return <Sauce sauce={sauce} fetchSingleSauce={fetchSingleSauce} key={idx} />
			})
		}
	</>
} 
