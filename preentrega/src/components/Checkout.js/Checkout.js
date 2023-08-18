import { Timestamp } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { db } from "../../services/firebase/firebase";
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { useState } from "react";
import { getDocs, collection, query, where, addDoc, writeBatch, documentId } from 'firebase/firestore'
import "./Checkout.css"

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');

    const { cart, total, clearCart } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);
        try {
            // ... (rest of your createOrder logic)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return (
            <div className="loading-container">
                <h1>Se está creando el pedido...</h1>
            </div>
        );
    }

    if (orderId) {
        return (
            <div className="order-success-container">
                <h1>¡Pedido Creado!</h1>
                <p>El ID de su pedido es: {orderId}</p>
            </div>
        );
    }

    return (
        <div className="checkout-container">
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    );
}

export default Checkout;
