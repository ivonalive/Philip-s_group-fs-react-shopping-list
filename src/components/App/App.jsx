import React from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';
import { useEffect, useState } from 'react';


function App() {

let [ itemName, setItemName] = useState('');
let [ itemQuantity, setQuantity] = useState('');
let [ itemUnit, setUnit] = useState('');
let [ itemPurchase, setPurchase] = useState('');
let [ listArray, setListArray] = useState([]);

const fetchList = () =>{
    console.log('fetchlist');
    axios({
        method: 'GET',
        url: '/api/shopping_list'
    }).then((response) => {
        console.log(response);
        console.log(response.data);
        setListArray(response.data);
      }).catch((error) => {
        console.log(error);
      });
}
useEffect(fetchList, []);




const addItem = (event) => {
    event.preventDefault();
    
    axios({
        method: 'POST',
        url: '/api/shopping_list',
        data: {
            name: itemName,
            quantity: itemQuantity,
            unit: itemUnit
        }
    })
        .then((response) => {
            console.log('successful post:', response);
            fetchList();
            setItemName('');
            setQuanity('');
            setUnit('');
        })
        .catch((error) => {
            console.log('post failed:', error);
        })
    }






    return (
        <div className="App">
            <Header />
            <main>
            <h1>Add an Item</h1> 
            <form onSubmit={addItem}>
            <label htmlFor="item">Item</label>
                <input id="item" onChange={(event) => setItemName(event.target.value)} value={setItemName} />
                <label htmlFor="quantity">Quantity</label>
                <input id="item" onChange={(event) => setQuantity(event.target.value)} value={setQuantity} />
                <label htmlFor="unit">Unit</label>
                <input id="item" onChange={(event) => setUnit(event.target.value)} value={setUnit} />
                <button type="submit">Add new item</button>
            </form>
            </main>
        </div>
    );
}

export default App;
