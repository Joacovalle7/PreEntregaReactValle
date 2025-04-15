import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';



const NavBar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Vaie Hardware 🖥️</h1>
      <ul className="navbar-menu">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Ofertas</a></li>
        <li><a href="#">Contacto</a></li>
        <li><CartWidget cartCount={cartCount} /></li>
      </ul>
    </nav>
  );
};

export default NavBar;
