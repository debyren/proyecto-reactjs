import carrito from '../cartWidget/assets/carrito.png'
import '../cartWidget/cartWidget.css'

function cartWidget(){
  return(
    <div className='carrito'>
    <img src={carrito} alt="" />
    <h6>0</h6>
    </div>
  )
}

export default cartWidget