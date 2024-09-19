import './App.css';
import groceryCart from './assets/grocery-cart.png';
import { useState } from 'react';

// {
//   name: 'Banana',
//   quantity: 1,
//   completed: false
// }

function App() {
	const [inputVal, setInputVal] = useState('');

	const [groceryItems, setGroceryItems] = useState([]);

	const handleChangeInputValue = (e) => {
		setInputVal(e.target.value);
	};

	const handleAddGroceryItem = (e) => {
		if (e.key === 'Enter') {
			if (inputVal) {
				const updatedGroceryList = [...groceryItems];
        //console.log(updatedGroceryList);
				const itemIndex = updatedGroceryList.findIndex(
					(item) => item.name === inputVal
				);

				if (itemIndex === -1) {
					updatedGroceryList.push({
						name: inputVal,
						quantity: 1,
						completed: false,
					});
				}else{
          updatedGroceryList[itemIndex].quantity++
        }

        setGroceryItems(updatedGroceryList);
				setInputVal('');
			}
		}
	};

  const handleRemoveItem = (name)=>{
    //console.log(name);
    const updatedGroceryList = [...groceryItems].filter(item => item.name !== name);

    setGroceryItems(updatedGroceryList);
  }

	const renderGroceryList = () => {
		return groceryItems.map((item) => (
			<li key={item.name}>
				<div className="container">
					<input type="checkbox" />
					<p>{item.name}{' '}{item.quantity > 1 && <span>x{item.quantity}</span>}</p>
				</div>
				<div>
					<button className="remove-button" onClick={()=> handleRemoveItem(item.name)}>x</button>
				</div>
			</li>
		));
	};

  

	return (
		<main className="App">
			<div>
				<div>
					<h4 className="success">You&#39;re done</h4>
					{/* {JSON.stringify(groceryItems)} */}
					<div className="header">
						<h1>Shopping List</h1>
						{/* {inputVal} <button onClick={clearInputValue}>Clear input</button>  two way binding*/}
						<img src={groceryCart} alt="" />
						<input
							type="text"
							placeholder="Add an item"
							className="item-input"
							value={inputVal}
							onChange={handleChangeInputValue}
							onKeyDown={handleAddGroceryItem}
						/>
					</div>
				</div>
				<ul>{renderGroceryList()}</ul>
			</div>
		</main>
	);
}

// const clearInputValue = ()=>{
//   setInputVal('')
// }

export default App;
