import { useState } from 'react';
import './App.css';
//how we want the data from inputs to be laid in an array
// [{
//   name: 'Salary',
//   amount: 3000,
//   type: 'income',
//   Date:''
// },
// {
//   name: 'Groceries',
//   amount: 100,
//   type: 'expense',
//   Date:''
// }]

function App() {
	//encapsulating all inputs into a single variable and single function
	const [input, setInput] = useState({
		statement: '',
		amount: '',
		statementType: 'income',
	});

	const [showError, setShowError] = useState({
		statement: false,
		amount: false,
	});

	const [statements, setStatements] = useState([]);

	const handleUpdateInput = (e) => {
		console.log(e.target.name);

		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	};

	const handleAddNewStatement = () => {
		//input validation
		const { statement, amount, statementType } = input;

		if (!statement) {
			return setShowError({
				statement: true,
				amount: false,
			});
		} else if (!amount) {
			return setShowError({
				statement: false,
				amount: true,
			});
		} else {
			setShowError({
				statement: false,
				amount: false,
			});
		}

		setStatements([
			...statements,
			{
				name: statement,
				amount: parseFloat(amount).toFixed(2),
				type: statementType,
				date: new Date().toDateString(),
			},
		]);

		setInput({
			statement: '',
			amount: '',
			statementType: 'income',
		});

		//console.log(statements);
	};

	return (
		<main>
			<div>
				{/* {JSON.stringify(statements)} */}
				<h1 className='total-text'>0</h1>
				<div className='input-container'>
					<input
						type='text'
						placeholder='income or expense'
						value={input.statement}
						name='statement'
						onChange={handleUpdateInput}
						style={
							showError.statement ? { borderColor: 'rgb(206, 76, 76)' } : null
						}
					/>
					<input
						type='number'
						value={input.amount}
						name='amount'
						onChange={handleUpdateInput}
						style={
							showError.amount ? { borderColor: 'rgb(206, 76, 76)' } : null
						}
					/>
					<select
						onChange={handleUpdateInput}
						name='statementType'
						value={input.statementType}
					>
						<option value='income'>income</option>
						<option value='expense'>expense</option>
					</select>
					<button onClick={handleAddNewStatement}>+</button>
				</div>
				<div>
					{statements.map(({ name, amount, type, date }) => (
						<div
							className='card'
							key={name}
						>
							<div className='card-info'>
								<h4>{name}</h4>
								<p>{date}</p>
							</div>
							<p
								className={`amount-text ${
									type === 'income' ? 'success' : 'danger'
								}`}
							>
								{type === 'income' ? '+' : '-'}${amount}
							</p>
						</div>
					))}
				</div>
			</div>
		</main>
	);
}

export default App;
