import React from 'react';
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { useState } from "react"
import{ link } from "react-router-dom"

import { CartContext } from "../../context/CartContext"

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0)

  const handleonAdded = (quantity) => {
    setQuantityAdded(quantity)

    const item = {
      id, name, price
    }

    addItem(item, quantity)
  }

  return (
    <article classname="CardItem">
      <header classname="Header">
        <h2 classname="ItemHeader">
          {name}
        </h2>
      </header>
      <picture>
        <img src={img} alt={name} classname="ItemImg"/>
      </picture>
      <section>
        <p className="Info">
          Categoria: {category}
        </p>
        <p className="Info">
          Descripción: {description}
        </p>
        <p className="Info">
          Precio: {price}
        </p>
      </section>
      <footer classname="Itemfooter">
        {
          quantityAdded > 0 ?(
            <link to="/cart" className="Option">terminar compra</link>
          ) : (
            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
          )
        }
      </footer>
    </article>
  )
}

export default ItemDetail
