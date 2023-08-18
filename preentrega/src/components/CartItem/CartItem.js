import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartItem.css";

const CartItem = ({ id, nombre, descripcion, precio, quantity }) => {
    const { removeItem } = useContext(CartContext);
    const subTotal = precio * quantity;

    const removeProduct = () => {
        removeItem(id);
    };

    return (
        <div className="cart-item">
            <div className="cart-item-info">
                <h2 className="item-name">{nombre}</h2>
                <p className="item-description">{descripcion}</p>
                <p className="item-price">${precio}</p>
                <p className="item-subtotal">Subtotal: ${subTotal}</p>
            </div>
            <button className="remove-button" onClick={() => removeProduct(id)}>
                Eliminar
            </button>
        </div>
    );
};

export default CartItem;
