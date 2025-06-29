import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router";
import Router from './Routes/Routes.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div className='text-black bg-white'>
        <Router />
      </div>
    </BrowserRouter>
  </StrictMode>,
)
