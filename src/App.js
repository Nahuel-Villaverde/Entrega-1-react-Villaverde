import NavBar from './Components/NavBar/NavBar.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemListContainer from './Components/Content/ItemListContainer.js';
import PageNotFound from './PageNotFound.js';
import ItemDetailContainer from './Components/Content/details/ItemDetailContainer.js';



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes> 
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/hamburguesas" element={<ItemListContainer/>} />
          <Route path={"/hamburguesas/:id"} element={<ItemDetailContainer/>} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
