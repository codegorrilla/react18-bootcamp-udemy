<<<<<<< HEAD
import { useState } from 'react';
import './App.css';

function App() {
  const [statement, setStatement] = useState('');
  const [amount, setAmount] = useState('');
  const [statementType, setStatementType] = useState('income');

  return (
    <main>
      <div>
        {/* {statement}
        {amount}
        <button onClick={() => setStatement('')}>clear</button>
        <button onClick={() => setAmount('')}>clear amount</button> */}
        <h1 className="total-text">0</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="income or expense"
            value={statement}
            onChange={(e) => {
              setStatement(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="$5000"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <select>
            <option value="income">income</option>
            <option value="expense">expense</option>
          </select>
          <button>+</button>
        </div>
        <div>
          <div className="card">
            <div className="card-info">
              <h4>Salary</h4>
              <p>July 27, 2024</p>
            </div>
            <p className="amount-text success">+$5000</p>
          </div>
        </div>
      </div>
    </main>
  );
=======
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
	const [statements, setStatements] = useState([]);
	const [input, setInput] = useState({
		statement: '',
		amount: '',
		statementType: 'income',
	});

	const [showError, setShowError] = useState({
		statement: false,
		amount: false,
	});

	const [total, setTotal] = useState(0);

	useEffect(() => {
		const newTotal = statements.reduce((sum, { type, amount }) => {
			if (type === 'expense') {
				return sum - parseFloat(amount);
			} else return sum + parseFloat(amount);
		}, 0);
		setTotal(newTotal);
	}, [statements]);

	const renderTotal = () => {
		if (total > 0) {
			return <h1 className='total-text success'>+${Math.abs(total)}</h1>;
		} else if (total < 0) {
			return <h1 className='total-text danger'>-${Math.abs(total)}</h1>;
		} else {
			return <h1 className='total-text'>${Math.abs(total)}</h1>;
		}
	};

	//handling of input values using onChange event handler on every input field
	const handleUpdateInput = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	};

	//validating input fields and add logic to add statements
	const handleAddNewStatement = () => {
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
				id: uuidv4(),
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
	};

	//

	return (
		<main>
			<div>
				{/* {JSON.stringify(statements)} */}
				{renderTotal()}
				<div className='input-container'>
					<input
						type='text'
						placeholder='Income or expense'
						onChange={handleUpdateInput}
						value={input.statement}
						name='statement'
						style={
							showError.statement ? { borderColor: 'rgb(206, 76, 76)' } : null
						}
					/>
					<input
						type='number'
						onChange={handleUpdateInput}
						value={input.amount}
						name='amount'
						style={
							showError.amount ? { borderColor: 'rgb(206, 76, 76)' } : null
						}
					/>
					<select
						name='statementType'
						onChange={handleUpdateInput}
						value={input.statementType}
					>
						<option value='income'>income</option>
						<option value='expense'>expense</option>
					</select>
					<button onClick={handleAddNewStatement}>+</button>
				</div>
			</div>
			<div>
				{statements.map(({ id, name, type, amount, date }) => (
					<div
						className='card'
						key={id}
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
		</main>
	);
>>>>>>> b33dee653ff52537b5b90a51bc3817ab8da61d18
}

export default App;
