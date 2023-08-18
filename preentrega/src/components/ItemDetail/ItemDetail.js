import React from 'react';
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({ nombre, imagen, precio, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0)
  const { addItem } = useContext(CartContext)

  const handleOnAdded = (quantity) => {
    setQuantityAdded(quantity)

    const item = {
      nombre,
      precio
    }

    addItem(item, quantity)
  }

  return (
    <div className='item-detail-container'>
      <div className='item-detail-card'>
        <div className="card-image has-text-centered">
          <figure className="image is-64x64 is-inline-block">
            <img src={imagen} alt={nombre} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{nombre}</p>
              <p className="subtitle is-6">Precio: ${precio}</p>
              <p className="subtitle is-6">Stock Disponible: {stock}</p>
            </div>
          </div>
          <div className="content">
            {quantityAdded > 0 ? (
              <Link to='/cart' className='checkout-link'>Terminar compra</Link>
            ) : (
              <ItemCount initial={1} stock={stock} onAdd={handleOnAdded} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;


