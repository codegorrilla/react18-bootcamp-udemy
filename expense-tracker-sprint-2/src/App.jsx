import { useState } from 'react';
import './App.css';

function App() {
  //encapsulating all inputs into a single variable and single function
	const [input, setInput] = useState({
		statement: '',
		amount: '',
		statementType: 'income',
	});

	const handleUpdateInput = (e) => {
		console.log(e.target.name);

		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	};

  

	return (
		<main>
			<div>
				<h1 className='total-text'>0</h1>
				<div className='input-container'>
					<input
						type='text'
						placeholder='income or expense'
						value={input.statement}
						name='statement'
						onChange={handleUpdateInput}
					/>
					<input
						type='number'
						value={input.amount}
						name='amount'
						onChange={handleUpdateInput}
					/>
					<select
						onChange={handleUpdateInput}
						name='statementType'
						value={input.statementType}
					>
						<option value='income'>income</option>
						<option value='expense'>expense</option>
					</select>
					<button>+</button>
				</div>
				<div>
					<div className='card'>
						<div className='card-info'>
							<h4>Salary</h4>
							<p>July 27th, 2024</p>
						</div>
						<p className='amount-text success'>+$3000</p>
					</div>
				</div>
			</div>
		</main>
	);
}

export default App;
