import { useState } from "react";

function ItemCount({ onAddToCart}) {
    const [count, setCount] = useState(0);
  
    function handleAdd() {
      setCount(count + 1);
    }
  
    function handleSubstract() {
     setCount(count - 1);
    }
  
    return (
      <div className="itemcount_container">
        <h6>Agregá la cantidad deseada al carrito</h6>
        <div className="itemcount_control">
          <button disabled={count <= 0} onClick={handleSubstract}>
            -
          </button>
          <span className="itemcount_count">{count}</span>
          <button className="btn" onClick={handleAdd}>
            +
          </button>
        </div>
  
        <div className="itemcount_btns">
          <button className="btn" onClick={() => onAddToCart(count)}>
            Agregar al carrito
          </button>
        </div>
      </div>
    );
  }
  
  export default ItemCount;