
import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import logosh from './components/navBar/assets/icon2.jpg';
import ItemList from './components/ItemList/ItemList'

function App() {
  return (
    
    <div className="App">
      <NavBar className= "nav"
      imagen= {logosh}
      />
      <ItemListContainer />
      <div className="Item">
      <ItemList 
          titulo="Sabanas"
          precio={11000}
          detalle="Sabanas 180 hilos"
          imgn= 'https://suarezhome.netlify.app/Imagenes/sabanas.jpg'
        />
          <ItemList 
          titulo="Acolchados"
          precio={10000}
          detalle="Acolchado 2 plazas y media"
          imgn= 'https://suarezhome.netlify.app/Imagenes/acolchados.jpg'
        />
          <ItemList 
          titulo="Juego de Toallas"
          precio={5000}
          detalle="juego de toallas 500gr"
          imgn= 'https://suarezhome.netlify.app/Imagenes/toallas.jpg'
        />
        </div>
    </div>
  );
}

export default App;
