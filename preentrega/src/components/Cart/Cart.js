import React, { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div className="cart-empty">
                <h1>No hay items en el carrito</h1>
                <Link to="/" className="back-to-products">
                    Volver a Productos
                </Link>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <div className="cart-items">
                {cart.map((p) => (
                    <CartItem key={p.id} {...p} />
                ))}
            </div>
            <div className="cart-summary">
                <h3 className="total-text">Total:</h3>
                <p className="total-amount">${total}</p>
                <button onClick={() => clearCart()} className="clear-button">
                    Limpiar carrito
                </button>
                <Link to="/checkout" className="checkout-button">
                    Checkout
                </Link>
            </div>
        </div>
    );
};

export { Cart };
