import "./App.css";
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

import { CartProvider } from "./context/CartContext"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/category/:cateogryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={ <ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={ <h1>404 NOT FOUND</h1>} />

      </Routes>
      </CartProvider>
      </BrowserRouter>
    </div>
      );
}  
  
    

export default App;
