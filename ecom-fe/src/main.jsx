// src/main.jsx (or index.js, assuming Vite setup)
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './store'
import { BrowserRouter } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters.jsx' // Adjust if your root is different
import './index.css' // If you have

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CustomerRouters />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)