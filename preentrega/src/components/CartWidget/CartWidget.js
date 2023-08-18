import React, { useContext } from "react";
import cart from "./assets/cart.svg";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./CartWidget.css"; 

const CartWidget = () => { 
    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to="/cart" className="cart-widget">
            <div className="cart-icon">
                <img src={cart} alt="Cart" />
                {totalQuantity > 0 && <span className="cart-badge">{totalQuantity}</span>}
            </div>
        </Link>
    );
};

export default CartWidget;
