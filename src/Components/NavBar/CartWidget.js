import {useCartContext} from '../Context/CartContext';
import './CartWidget.css';

const CartWidget = () => {
  const {totalProducts, cart} = useCartContext();
  return (
    <div className="carro">
        <span className="cart-counter">{totalProducts() || cart}</span>
        <span className="cart">🛒</span>
    </div>
  )
}

export default CartWidget