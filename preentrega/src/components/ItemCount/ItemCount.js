import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="item-count">
            <div className="controls">
                <button className="button minus-button" onClick={decrement}>-</button>
                <h4 className="number">{quantity}</h4>
                <button className="button plus-button" onClick={increment}>+</button>
            </div>
            <div>
                <button
                    className="button add-to-cart-button"
                    onClick={() => onAdd(quantity)}
                    disabled={!stock}
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default ItemCount;
