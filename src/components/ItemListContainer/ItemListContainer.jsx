import React from 'react';

const ItemListContainer = ({ greeting, addToCart }) => {
  return (
    <section>
      <h2>{greeting}</h2>
      <div className="product-list">
        <div className="product-item">
          <h3>Mouse Gamer</h3>
          <p>$4500</p>
          <button onClick={addToCart}>Agregar al carrito</button>
        </div>
        <div className="product-item">
          <h3>Teclado Mecánico</h3>
          <p>$9200</p>
          <button onClick={addToCart}>Agregar al carrito</button>
        </div>
      </div>
    </section>
  );
};

export default ItemListContainer;

