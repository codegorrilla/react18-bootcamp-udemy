import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <main className="main_container">
        <NavBar />
        <Outlet />
      </main>
    </div>
  );
}

export default App;
