import { NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = ({}) => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Vaie Hardware 🖥️</h1>
      <ul className="navbar-menu">
        <li>
          <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "active-link" : ""}>
            Inicio
        </NavLink></li>
        <li>
          <NavLink 
          to="/productos" 
          className={({ isActive }) => isActive ? "active-link" : ""}>
        Productos
        </NavLink>
        </li>
        <li>
          <NavLink 
          to="/ofertas" 
          className={({ isActive }) => isActive ? "active-link" : ""}>
        Ofertas
        </NavLink>
        </li>
        <li>
          <NavLink 
          to="/contacto" 
          className={({ isActive }) => isActive ? "active-link" : ""}>
        Contacto
        </NavLink>
        </li>
        <li>
          <CartWidget /></li>
      </ul>
    </nav>
  );
};

export default NavBar;

