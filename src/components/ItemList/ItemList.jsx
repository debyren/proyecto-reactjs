import './ItemList.css'
function Item({ titulo, precio, detalle, imgn }) {
    return (
      <div >
        <div >
          <h2>{titulo}</h2>
        </div>
        <div >
          <img src={imgn} alt="imagen"></img>
        </div>
        <div >
          <h4>$ {precio}</h4>
          <p>{detalle}</p>
          <button>Comprar</button>
        </div>
      </div>
    );
  }
  
  export default Item;