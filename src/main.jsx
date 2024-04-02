import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home.jsx'
import Products from './pages/products';
import ProductDetails from './components/productDetails';
import Checkout from './pages/checkout';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
