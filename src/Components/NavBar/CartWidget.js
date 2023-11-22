import {useCartContext} from '../Context/CartContext';
import './CartWidget.css';

const CartWidget = () => {
  const {totalProducts} = useCartContext();
  return (
    <div className="carro">
        <span className="cart-counter">{totalProducts()}</span>
        <span className="cart">🛒</span>
    </div>
  )
}

export default CartWidget