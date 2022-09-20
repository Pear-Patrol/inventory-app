import React, { useState } from 'react';
import apiURL from '../api';

export const AddPage = ({ setDisplayAddPage, fetchItems, fetchSauces }) => {
    const [title, setTitle] = useState('');
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [image, setImage] = useState('')


    const handleSubmit = async (ev) => {
        const itemData={
            title: title,
            price: price,
            description:description,
            category:category,
            image:image
        }
        event.preventDefault()
        console.log('items submitted')
        const response = await fetch(`${apiURL}/items`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                itemData)
        });
        const data = await response.json();
        setDisplayAddPage(false);
        fetchItems(data)
    }
    const handleSubmitS = async (ev) => {
        const sauceData = {
            name: name,
            image: image
        }
        event.preventDefault()
        console.log('saucedata submitted')
        const response = await fetch(`${apiURL}/sauces`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                sauceData)
        });
        const data = await response.json();
        setDisplayAddPage(false);
        fetchSauces(data)
    }

    return (
        <>
            <h1>Add Something!</h1>
            <form onSubmit={() => handleSubmitS()}>
                <h2>Add Sauce</h2>
                <input type="text" placeholder='Name'
                    value={name} onChange={(ev) => setName(ev.target.value)} />
                <input type="text" placeholder='Image'
                    value={image} onChange={(ev) => setImage(ev.target.value)} />
                <button type='submit'> Submit</button>
            </form>
            <br></br>
            <form onSubmit={() => handleSubmit()}>
                <h2>Add Item</h2>
                <input type="text" placeholder='Title'
                    value={title} onChange={(ev) => setTitle(ev.target.value)} />
                <input type="text" placeholder='Price'
                    value={price} onChange={(ev) => setPrice(ev.target.value)} />
                <input type="text" placeholder='Description'
                    value={description} onChange={(ev) => setDescription(ev.target.value)} />
                <input type="text" placeholder='Category'
                    value={category} onChange={(ev) => setCategory(ev.target.value)} />
                <input type="text" placeholder='Image'
                    value={image} onChange={(ev) => setImage(ev.target.value)} />
                <button type='submit'> Submit</button>
            </form>
        </>
    )
}