import { useState } from 'react';
import './App.css';

function App() {
	const [statement, setStatement] = useState('');
	const [amount, setAmount] = useState('');
	const [statementType, setStatementType] = useState('income');

	return (
		<main>
			<div>
				{statement}
				{amount}
				{statementType}
				<button onClick={() => setStatement('')}>Clear</button>
				<button onClick={() => setAmount('')}>Clear</button>
				<button onClick={() => setStatementType('income')}>Clear</button>
				<h1 className='total-text'>0</h1>
				<div className='input-container'>
					<input
						type='text'
						placeholder='income or expense'
						value={statement}
						onChange={(e) => setStatement(e.target.value)}
					/>
					<input
						type='number'
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
					/>
					<select onChange={(e) => setStatementType(e.target.value)}>
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
