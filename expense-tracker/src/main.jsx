import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import App from './App.jsx'
import './index.css'
=======
import './index.css'
import App from './App.jsx'
>>>>>>> b33dee653ff52537b5b90a51bc3817ab8da61d18

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
