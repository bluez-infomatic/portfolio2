import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'  // ✅ Add this

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>       {/* ✅ Wrap App inside HashRouter */}
      <App />
    </HashRouter>
  </StrictMode>
)
