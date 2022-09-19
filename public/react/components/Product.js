import React from 'react';

export const Product = (props) => {

  return <>
  <div class="card">
    <h3>{props.product.name}</h3>
    <img src={props.product.image} alt={props.product.name} />
    </div>
  </>
} 
	