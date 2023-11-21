import './NavBar.css';
import CartWidget from './CartWidget.js';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <Link to="/" className="nombre-marca">SaborBurger</Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/hamburguesas">Hamburgers</Link>
        </li>
        <li>
          <Link to={`/category/veganas`} >
            Veganas
          </Link>
        </li>
        <li>Contact us</li>
      </ul>
      <Link to="/cart">
        <CartWidget class="cart-icon" />
      </Link>
    </div>
  )
}

export default NavBar