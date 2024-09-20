import './App.css';
import groceryCart from './assets/grocery-cart.png';
import { useState, useEffect } from 'react';

// {
//   name: 'Banana',
//   quantity: 1,
//   completed: false
// }

function App() {
	const [inputVal, setInputVal] = useState('');

	const [groceryItems, setGroceryItems] = useState([]);

	const [isCompleted, setIsCompleted] = useState(false);

	useEffect(()=>{
		console.log('Called');
	}, [groceryItems])

	//getting the input value
	const handleChangeInputValue = (e) => {
		setInputVal(e.target.value);
	};

	//adding input values as list items
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
				} else {
					updatedGroceryList[itemIndex].quantity++;
				}

				setGroceryItems(updatedGroceryList);
				setInputVal('');
			}
		}
	};

	console.log(groceryItems);

	//deleting an item
	const handleRemoveItem = (name) => {
		//console.log(name);
		const updatedGroceryList = [...groceryItems].filter(
			(item) => item.name !== name
		);

		setGroceryItems(updatedGroceryList);
	};

	//mark an item as done
	const handleUpdateCompleteStatus = (status, index) => {
		const updatedGroceryList = [...groceryItems];

		updatedGroceryList[index].completed = status;

		setGroceryItems(updatedGroceryList);
	};

	// const determineCompletedStatus = ()=>{
	// 	if(!groceryItems.length){
	// 		return setIsCompleted(false)
	// 	}

	// 	let isAllCompleted = true;

	// 	groceryItems.forEach(item=>{
	// 		if(!item.completed) isAllCompleted = false;
	// 	});

	// 	setIsCompleted(isAllCompleted);
	// }

	//rendering item list
	const renderGroceryList = () => {
		return groceryItems.map((item, index) => (
			<li key={item.name}>
				<div className="container">
					<input
						type="checkbox"
						value={item.completed}
						checked={item.completed}
						onChange={(e) => {
							console.log(e.target.checked);
							handleUpdateCompleteStatus(e.target.checked, index);
						}}
					/>
					<p>
						{item.name} {item.quantity > 1 && <span>x{item.quantity}</span>}
					</p>
				</div>
				<div>
					<button
						className="remove-button"
						onClick={() => handleRemoveItem(item.name)}
					>
						x
					</button>
				</div>
			</li>
		));
	};

	return (
		<main className="App">
			<div>
				<div>
					{/* <button
						onClick={() => {
							const updatedGroceryList = [...groceryItems].map((item) => {
								return {
									...item,
									completed: false,
								};
							});						

							setGroceryItems(updatedGroceryList);
						}}
					>
						Clear all checks
					</button> */}
					{isCompleted && <h4 className="success">You&#39;re done</h4>}
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
