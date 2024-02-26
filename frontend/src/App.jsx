import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";

import Product from "./pages/Product";
import ShoppingCart from "./pages/ShoppingCart";
import Slide from "./components/Slide";
import { useAuth } from "@clerk/clerk-react";
import NotLogger from "./pages/NotLogger";

import Cart from "./pages/Cart";

function App(){
    const {isSignedIn} = useAuth();
    
    return(
        <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<Slide/>}/>

            <Route path='/Producto' element={<Product/>}/>
            {isSignedIn && (
                <>
            <Route path='/ShoppingCart/:id' element={<ShoppingCart/>}/>
            <Route path="/cart" element={<Cart/>}/>
            </>
            )}
            <Route path="*" element={<NotLogger/>}/>
          </Route>
          

        </Routes>
      </BrowserRouter>
    )
}

export default App;