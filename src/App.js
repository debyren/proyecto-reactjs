
import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import logosh from './components/navBar/assets/icon2.jpg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <NavBar className= "nav"
      imagen= {logosh} Route path='/' element= {<ItemListContainer />}/>
    
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:categoryid' element={<ItemListContainer />}/>
        <Route path='/item/:itemid' element={<ItemDetailContainer  />}/>
        </Routes>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
