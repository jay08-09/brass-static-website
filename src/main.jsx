import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './sections/header/header.jsx'
import Footer from './sections/footer/footer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Header />
      <App />
      <Footer />
  </StrictMode>,
)
