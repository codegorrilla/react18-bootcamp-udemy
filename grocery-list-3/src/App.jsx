import './App.css';
import groceryCart from './assets/grocery-cart.png';
import { useState, useEffect } from 'react';

function App() {
	//hooks
	const [inputVal, setInputVal] = useState('');
	const [groceryItems, setGroceryItems] = useState([]);
	const [isCompleted, setIsCompleted] = useState(false);

	useEffect(() => {
		determineCompletedStatus();
	}, [groceryItems]);

	//getting input text value
	const handleInputVal = (e) => {
		//console.log(e.target.value);
		setInputVal(e.target.value);
	};

	//checking status of all list items
	const determineCompletedStatus = () => {
		if (!groceryItems.length) {
			return setIsCompleted(false);
		}

		let isAllCompleted = true;

		groceryItems.forEach((item) => {
			if (!item.completed) {
				isAllCompleted = false;
			}
		});

		setIsCompleted(isAllCompleted);
	};

	//adding inout values as item list array
	const handleAddGroceryItems = (e) => {
		if (e.key === 'Enter') {
			if (inputVal) {
				const updatedGroceryList = [...groceryItems];

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

				console.log(updatedGroceryList);
				setGroceryItems(updatedGroceryList);
				setInputVal('');
			}
		}
	};

	//deleting an item
	const handleRemoveItem = (name) => {
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

		console.log(status);
	};

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

	const selectAllTasks = () => {
		const updatedGroceryList = [...groceryItems].map((item) => {
			return {
				...item,
				completed: true,
			};
		});

		setGroceryItems(updatedGroceryList);
	};

	return (
		<main className="App">
			<div>
				<div>{isCompleted && <h4 className="success">You&#39;re done</h4>}</div>
				<div className="header">
					<h1>Grocery List</h1>
					<img src={groceryCart} alt="" />
					{groceryItems.length && <button onClick={selectAllTasks}>Select all items</button>}
					{/* {groceryItems.length && <button>Delete all items</button>} */}
					<input
						type="text"
						placeholder="Add an item"
						className="item-input"
						value={inputVal}
						onChange={handleInputVal}
						onKeyDown={handleAddGroceryItems}
					/>
				</div>
			</div>
			<ul>{renderGroceryList()}</ul>
		</main>
	);
}

export default App;
