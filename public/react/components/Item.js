import React from 'react';

export const Item = (props) => {

  return <>
  <div class="card" onClick={ () => props.fetchSingleItem(props.items.id) }>
    <h3>{props.items.title}</h3>
    <img src={props.items.image} alt={props.items.title} />
    </div>
  </>
}