import React from "react";

const CartItem = ({ name, price, quantity }) => {
  return (
    <div className="cart-item">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
};

export default CartItem;
