import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import About from './pages/About.jsx';
import DetailsPage from './pages/DetailsPage.jsx';
import Home from './pages/Home.jsx';

//defining routing rules
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path = '/about' element = {<About />}/>
      <Route path="/details/:id" element={<DetailsPage />} />
    </Route>,
  ),
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
