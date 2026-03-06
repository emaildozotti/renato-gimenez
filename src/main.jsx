import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

window.addEventListener('load', () => {
  if (window.AOS) {
    window.AOS.init({
      duration: 700,
      easing: 'ease-out-quart',
      once: true,
      offset: 60,
    })
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
