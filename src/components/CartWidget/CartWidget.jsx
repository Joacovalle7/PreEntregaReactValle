import React from 'react';

const CartWidget = ({ cartCount }) => {
  return (
    <div>
      <span role="img" aria-label="carrito">🛒</span>
      {cartCount > 0 && <span> ({cartCount})</span>}
    </div>
  );
};

export default CartWidget;



