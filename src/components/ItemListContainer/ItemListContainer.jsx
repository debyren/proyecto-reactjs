import React, { useState, useEffect } from "react";
import '../ItemListContainer/ItemListContainer.css'

import ItemData from '../ItemData/ItemData';
import getItems from "../../services/mock";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  useEffect( () => {
    getItems(itemid).then((respuesta) => {
      setProducts(respuesta);
    });
   }, [])
  

  return (
    <>
      <ItemData products={products} />
    </>
  );
}

export default ItemListContainer;