import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/home/home.tsx'
import './main.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
