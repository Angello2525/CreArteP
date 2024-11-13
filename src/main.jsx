import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
=======
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
>>>>>>> 8e1a8be (Footer)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
<<<<<<< HEAD
  </StrictMode>
)
=======
  </StrictMode>,
)
>>>>>>> 8e1a8be (Footer)
