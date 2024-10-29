import './App.css'
import shoppingCart from './assets/grocery-cart.png'
import { useState } from 'react'

function App() {
    const [inputVal, setInputVal] = useState('')
    const handleChangeInputValue = (e)=>{
      setInputVal(e.target.value)
    }

    return <main className='App'>
        <div>
            <h4 className='success'>You're done</h4>
            <div className='header'>
                <h1>Shopping List</h1>
                {inputVal}
                <button onClick={()=>{
                  setInputVal('')
                }}>clear</button>
                <img src={shoppingCart} alt='Cart'/>
                <input type="text" placeholder='Add an item' className='item-input' onChange={handleChangeInputValue} value={inputVal}/>
            </div>
            <div>
                <ul>
                    <li>
                        <div className='container'>
                            <input type="checkbox"/>
                            <p>Carrots</p>
                        </div>
                        <button className='remove-button'>X</button>
                    </li>
                </ul>
            </div>
        </div>

    </main>
}

export default App
