import { Link } from 'react-router-dom';
import './ItemList.css'


function Item({id,  title, price, detaile, imgurl, discount }) {
  let urlDetail =  `/item/${id} `;

  
  let priceDesc = `fuente ${discount ? "precioDesc" : ""}`;

    return (
      <div  >
        <div >
          <h2>{title}</h2>
        </div>
        <div >
          <img src={imgurl} alt="imagen"></img>
        </div>
        <div >
          <h4 className={priceDesc}> $ {price}</h4>
          {discount && (
            <span style={{ color: "green" }}> Descuento: {discount}%</span>
          )}
          <p>{detaile}</p>
          <Link to={urlDetail}>
          <button>Ver mas</button>
          </Link>
        </div>
      </div>
    );
  }
  export default Item;

