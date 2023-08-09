import React from 'react';
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0)
  const { addItem } = useContext(CartContext)

  const handleOnAdded = (quantity) => {
    setQuantityAdded(quantity)

    const item = {
      id, name, price
    }

    addItem(item, quantity)
  }

  return (
    <div className='contenedor'>
      <div className='column is-one-quarter'>
        <div className="card equal-height">
          <div className="card-image has-text-centered">
            <figure className="image is-64x64 is-inline-block">
              <img src={img} alt={name} />
            </figure>
            <p className="Info">
              Categoria: {category}
            </p>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{name}</p>
                <p className="subtitle is-6">{description}</p>
                <p className="subtitle is-6">Precio: ${price}</p>
                <p className="subtitle is-6">Stock Disponible: {stock}</p>
              </div>
            </div>
            <div className="content">
              {quantityAdded > 0 ? (
                <Link to='/cart' className='Option'>Terminar compra</Link>
              ) : (
                <ItemCount initial={1} stock={stock} onAdd={handleOnAdded} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;

