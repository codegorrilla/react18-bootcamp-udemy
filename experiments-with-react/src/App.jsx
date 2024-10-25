import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [inputVals, setInputVals] = useState([]);

  const stackInputVals = () => {
    console.log(`this is: ${input}`);
  };

  const handleInputVal = (e) => {
    setInput(e.target.value);
  };

  const getInputVal = (e) => {
    if (e.key === 'Enter') {
      //console.log(e.target.value);
      if (input) {
        //console.log(e.target.value);
        window.localStorage.setItem('name', JSON.stringify(input));
        setInput('');
      }
    }
  };

  const storeInputVal = () => {
    console.log(input);
    window.localStorage.setItem('name', JSON.stringify(input));
    setInput('');
  };

  const clearStorage = () => {
    window.localStorage.clear('name');
  };

  return (
    <div>
      <div className="container">
        <input
          type="text"
          value={input}
          placeholder="write something..."
          onChange={handleInputVal}
          onKeyDown={getInputVal}
        />
        <button onClick={storeInputVal}>Store value</button>
        <button onClick={clearStorage}>Clear storage</button>
      </div>
    </div>
  );
}

export default App;
