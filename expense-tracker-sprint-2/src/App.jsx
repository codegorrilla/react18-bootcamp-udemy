import './App.css';

function App() {
	return (
		<main>
			<div>
				<h1 className='total-text'>0</h1>
				<div className='input-container'>
					<input
						type='text'
						placeholder='income or expense'
					/>
					<input type='number' />
					<select>
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
