import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { EventProvider } from './Data.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EventProvider>
    <App />
    </EventProvider>
    
  </StrictMode>,
)
