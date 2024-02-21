import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout.jsx'
import Product from './pages/Product.jsx'
import Slide from './components/Slide.jsx'
import ShoppingCart from './pages/ShoppingCart.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<Slide/>}/>
            <Route path='/Producto' element={<Product/>}/>
            <Route path='/ShoppingCart/:id' element={<ShoppingCart/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)
