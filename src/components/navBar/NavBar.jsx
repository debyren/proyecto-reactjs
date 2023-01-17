import './NavBar.css'
import CartWidget from '../cartWidget/CartWidget';
import { Link } from 'react-router-dom';
function NavBar(props){
   const {imagen} = props;
    return (
        <div className="nav">
            <div>
<img className='logo' src= {imagen} alt="logo" />
            </div>
        <ul className="list-nav">
            
            <li >
               <Link to="#"> Sabanas </Link>
                </li>
            <li >
               <Link to="#"> Covers </Link>
                </li>
            <li >
               <Link to="#"> Acolchados </Link>
                </li>
                <li >
               <Link to="#"> Toallas </Link>
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