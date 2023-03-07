
import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import logosh from './components/navBar/assets/icon2.jpg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './storage/cartContext';
import CartContainer from './components/cartContainer/CartContainer.jsx';



function App() {
  return (
    <>
  <CartContextProvider>
    <BrowserRouter>
    <NavBar className= "nav"
      imagen= {logosh} Route path='/' element= {<ItemListContainer />}/>
    
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:categoryid' element={<ItemListContainer />}/>
        <Route path='/item/:itemid' element={<ItemDetailContainer  />}/>
        <Route path='/cart' element={<CartContainer/>}/>
      </Routes>
    </BrowserRouter>
  </CartContextProvider>
    </>
  );
}

export default App;
