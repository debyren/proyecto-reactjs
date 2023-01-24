import React, { useState, useEffect } from "react";
import '../ItemListContainer/ItemListContainer.css'

import ItemData from '../ItemData/ItemData';
import getItems , { getItemByCategory } from "../../services/mock";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [products, setProducts] = useState([]);

  let {categoryid} = useParams();



  useEffect(() => {
    if (categoryid) {
      getItemByCategory(categoryid).then((respuesta) => {
        
        setProducts(respuesta);
      });
    } else {
      getItems().then((respuesta) => {
        
        setProducts(respuesta);
      });
    }
  }, [categoryid]);

  

  return (
    <>
    <div className="itemList">
      <ItemData products={products} />
      </div>
    </>
  );
}

export default ItemListContainer;