import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import { getSingleItem } from "../services/mock";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  let { itemid } = useParams();
  
  useEffect(() => {
    getSingleItem(itemid).then((respuesta) => {
      setProduct(respuesta);
    });
  }, []);

    return (
      <>
       <h1> {product.title} </h1>
      <img src={product.imgurl} alt="product" />
         <h4>${product.price}</h4>
         <h6>{product.detail}</h6>
         <button>Comprar</button>
      </>
    );
  }

export default ItemDetailContainer