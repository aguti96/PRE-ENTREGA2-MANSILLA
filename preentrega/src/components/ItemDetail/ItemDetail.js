import React from 'react';

const ItemDetail = ( item ) => {
  return (
    <div className="ItemDetail">
      <h2>{item.name}</h2>
      <img src={item.imagen} alt={item.name} />
      <p>Precio: ${item.price}</p>
      <p>Stock disponible: {item.stock}</p>
      <p>Descripción: {item.description}</p>
    </div>
  );
};

export default ItemDetail;
