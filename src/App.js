import NavBar from './Components/NavBar/NavBar.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemListContainer from './Components/Content/ItemListContainer.js';
import PageNotFound from './PageNotFound.js';
import ItemDetailContainer from './Components/Content/details/ItemDetailContainer.js';
import CartProvider from '../src/Components/Context/CartContext.js';
import Cart from './Components/Cart.js'
import { Checkout } from './Components/CheckOut.js';
import Inicio from './Components/Content/Inicio.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer autoClose={1000}/>
    <CartProvider>
      <NavBar />
      <Routes> 
          <Route path="/" element={<Inicio/>} />
          <Route path="/hamburguesas" element={<ItemListContainer/>} />
          <Route path={"/cart"} element={<Cart/>} />
          <Route path={"/hamburguesas/:id"} element={<ItemDetailContainer/>} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path={"/checkout"} element={<Checkout/>} />
          <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </CartProvider>
    </BrowserRouter>
  );
}

export default App;
