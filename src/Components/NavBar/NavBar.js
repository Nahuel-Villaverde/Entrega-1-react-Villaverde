import './NavBar.css';
import CartWidget from './CartWidget.js';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <span className="nombre-marca">SaborBurger</span>
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
      <CartWidget />
    </div>
  )
}

export default NavBar