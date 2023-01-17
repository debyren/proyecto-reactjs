import { Link } from 'react-router-dom';
import './ItemList.css'


function Item({id,  title, price, detaile, imgurl }) {
  let urlDetail = '/item/' + id;
    return (
      <div  >
        <div >
          <h2>{title}</h2>
        </div>
        <div >
          <img src={imgurl} alt="imagen"></img>
        </div>
        <div >
          <h4>$ {price}</h4>
          <p>{detaile}</p>
          <Link to={urlDetail}>
          <button>Ver mas</button>
          </Link>
        </div>
      </div>
    );
  }
  export default Item;

