import './NavBar.css'
import CartWidget from '../cartWidget/CartWidget';
import { Link } from 'react-router-dom';


function NavBar(props){
  
   const {imagen} = props;
    return (
      
        <div className="nav">
            <div>
            
 <Link to="/">
    <img className='logo' src= {imagen} alt="logo" />
 </Link>
            </div>
          
        <ul className="list-nav">
            
            <li >
               <Link to={'/category/sabanas'}> Sabanas </Link>
                </li>
            
            <li >
               <Link to={'/category/acolchados'}> Acolchados </Link>
                </li>
                <li >
               <Link to={'/category/toallas'}> Toallas </Link>
                </li>
                <li>
              <li>
                <CartWidget />
              </li>
            </li>
        </ul>
        
        </div>
    )
}

export default NavBar