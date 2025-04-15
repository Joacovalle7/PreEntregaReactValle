import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const addToCart = () => {
    setCartCount(cartCount + 1);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000); // Oculta el mensaje después de 2 segundos
  };

  return (
    <>
      <NavBar cartCount={cartCount} />
      <ItemListContainer greeting="¡Bienvenido a Vaie Hardware!" addToCart={addToCart} />
      {showMessage && <div className="cart-message">¡Agregado al carrito!</div>}
    </>
  );
}

export default App;

