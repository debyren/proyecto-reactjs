import Item from "../ItemList/ItemList";

function ItemData(props) {
  return (
    <div className='Item' >
      {props.products.map((item) => (
       
        <Item
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          detail={item.detail}
          imgurl={item.imgurl}
          discount={item.discount}
        />

      ))}
    
    </div>
  );
}

export default ItemData;