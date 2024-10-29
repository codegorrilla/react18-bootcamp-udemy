//get the value of input text field store the input value inside an array

import './App.css';
import groceryCart from './assets/grocery-cart.png';
import {useState} from 'react';

function App() {

    const [inputVal,
        setInputVal] = useState('');

    const [groceryItems,
        setGroceryItems] = useState([]);

    const handleInputChange = (e) => {
        setInputVal(e.target.value);
        //console.log(inputVal);
    }

    //storing input field values inside an array
    const handleGroceryItems = (e) => {
        if (e.key === 'Enter') {
            if (inputVal) {
                const updatedGroceryList = [...groceryItems];
                //console.log(updatedGroceryList);

                const itemIndex = updatedGroceryList.findIndex(item => item.name === inputVal);

                if (itemIndex === -1) {
                    updatedGroceryList.push({name: inputVal, quantity: 1, completed: false});
                } else {
                    updatedGroceryList[itemIndex].quantity++;
                }

                setGroceryItems(updatedGroceryList);
                setInputVal('');

            }
        }

    }

    return (
        <main className="App">
            <div>
                <div>
                    <h4 className="success">You&#39;re done</h4>
                    {inputVal}
                    <div className="header">
                        <h1>Grocery List 2</h1>
                        {JSON.stringify(groceryItems)}
                        <img src={groceryCart} alt=""/>
                        <input
                            type="text"
                            placeholder="Add an item"
                            className="item-input"
                            value={inputVal}
                            onChange={handleInputChange}
                            onKeyDown={handleGroceryItems}/>
                    </div>
                </div>
                <ul></ul>
            </div>
        </main>
    );
}

export default App;
