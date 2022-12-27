import './NavBar.css'
import CartWidget from '../cartWidget/CartWidget';

function NavBar(props){
   const {imagen} = props;
    return (
        <div className="nav">
            <div>
<img className='logo' src= {imagen} alt="logo" />
            </div>
        <ul className="list-nav">
            
            <li >
               <a href="#"> Sabanas </a>
                </li>
            <li >
               <a href="#"> Covers </a>
                </li>
            <li >
               <a href="#"> Acolchados </a>
                </li>
                <li >
               <a href="#"> Toallas </a>
                </li>
                <li>
              <a>
                <CartWidget />
              </a>
            </li>
        </ul>
        
        </div>
    )
}

export default NavBar