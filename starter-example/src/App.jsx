import {useState} from 'react';
import './App.css';

function App(){
  const [count, setCount] = useState(0);

  const addToCount = ()=>{
    if(count < 10){
      setCount(count + 1);
    }
  }

  const substractToCount = ()=>{
    if (count > 0){
      setCount(count - 1);
    }
  }

  return(
    <>
      <div>{count}</div>
      <button onClick={addToCount}>+</button>
      <button onClick={substractToCount}>-</button>
    </>
  )
}

export default App;