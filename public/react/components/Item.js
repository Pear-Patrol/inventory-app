import React from 'react';

export const Item = (props) => {

  return <>
  <div class="card">
    <h3>{props.items.title}</h3>
    <img src={props.items.image} alt={props.items.title} />
    </div>
  </>
} 
	