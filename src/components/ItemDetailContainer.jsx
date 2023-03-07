import React,  { useState, useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getSingleItem } from "../services/mock";
import { cartContext } from '../storage/cartContext';
import ItemCount from './ItemCount/ItemCount';
import './ItemList/ItemList.css'


function ItemDetailContainer(){
  const [product, setProduct] = useState([]);
  const [isInCart, setIsInCart] = useState(false);

  let { itemid } = useParams();

 const {addItem, removeItem} = useContext(cartContext);

 function handleAddToCart(count) {
  setIsInCart(true);
  alert(`Agregaste ${count} ${product.title} de $${product.price} al carrito`);
  product.count = count;
  addItem(product);
}

  useEffect(() => {
    getSingleItem(itemid).then((respuesta) => {
      setProduct(respuesta);
    });
  }, [itemid]);


    return (
      <>
       <h1> {product.title} </h1>
      <img src={product.imgurl} alt="product" />
         <h4>${product.price}</h4>
         <h6>{product.detail}</h6>
         <h6 className='precioDesc' > Descuento: %{product.discount}</h6>
         <ItemCount handleAddToCart={handleAddToCart}  />
         <Link to="/cart">
       <button>Ir al carrito</button> 
       </Link>
      </>
    );
  }

export default ItemDetailContainer