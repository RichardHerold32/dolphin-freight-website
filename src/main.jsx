import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

if (!import.meta.env.VITE_WEB3FORMS_ACCESS_KEY) {
  console.warn(
    "⚠️ VITE_WEB3FORMS_ACCESS_KEY is not set. Contact/Booking forms will not deliver submissions."
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>
)
