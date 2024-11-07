import './App.css'
import {Outlet} from 'react-router-dom'
import Navigation from './components/shared/Navigation'

function App() {
  return(
    <main>
      <div className="container">
        <Navigation />
        <Outlet />
      </div>
    </main>
  )
}

export default App
