import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, nombre, imagen, precio, stock }) => {
    return (
        <div className="item-card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={imagen} alt={nombre} />
                </figure>
            </div>
            <div className="card-content">
                <div className="content">
                    <h3 className="item-title">{nombre}</h3>
                    <p className="item-price">Precio: ${precio}</p>
                    <p className="item-stock">Stock Disponible: {stock}</p>
                    <Link to={`/item/${id}`} className="item-link button is-primary">Ver detalle</Link>
                </div>
            </div>
        </div>
    );
};

export default Item;
