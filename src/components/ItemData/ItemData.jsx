import ItemList from "../ItemList/ItemList";

function ItemData(props) {
  return (
    <div className='Item' >
      {props.products.map((item) => (
       
        <item
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          detail={item.detail}
          imgurl={item.imgurl}
        />

      ))}
    
    </div>
  );
}

export default ItemData;