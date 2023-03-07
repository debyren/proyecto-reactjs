import React, { useState, useEffect } from "react";
import '../ItemListContainer/ItemListContainer.css'

import ItemData from '../ItemData/ItemData';
import getItems , { getItemByCategory } from "../../services/mock";
import { useParams } from "react-router-dom";
import Loader from "../loader/Loader";


function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let {categoryid} = useParams();

  // useEffect(() => {
  //   if (categoryid) {
  //     getItemByCategory(categoryid).then((respuesta) => {
        
  //       setProducts(respuesta);
  //     });
  //   } else {
  //     getItems().then((respuesta) => {
        
  //       setProducts(respuesta);
  //     });
  //   }
  // }, [categoryid]);

  async function getProducts() {
    if (!categoryid) {
      try {
        let response = await getItems();
        setProducts(response);
        // setNotification({
        //   type: "default",
        //   text: `Se cargaron ${response.length} productos correctamente...`,
        // });
      } catch (error) {
        alert(error);
        // setNotification({
        //   type: "danger",
        //   text: `Error cargando los productos: ${error}`,
        // });
      } finally {
        setIsLoading(false);
      }
    } else {
      let response = await getItemByCategory(categoryid);
      setProducts(response);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, [categoryid]);
  

  return (
    <>
    <div className="itemList">
       {isLoading ? (
        <Loader color="blue" size={500} />
      ) : (
        <ItemData products={products} />
      )}
      
      </div>
    </>
  );
}

export default ItemListContainer;