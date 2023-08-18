import React, { useState } from "react";
import "./CheckoutForm.css"; // Asegúrate de que el nombre del archivo CSS sea correcto

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [emailVerification, setEmailVerification] = useState("");

    const handleConfirm = (event) => {
        event.preventDefault();

        if (emailVerification !== email) {
            alert("El email ingresado no coincide con la validación.");
        } else {
            const userData = {
                name,
                lastName,
                phone,
                email
            };

            onConfirm(userData);
        }
    };

    return (
        <div className="checkout-container">
            <form onSubmit={handleConfirm} className="checkout-form">
                <label className="label">
                    Nombre
                    <input
                        className="input"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <label className="label">
                    Apellido
                    <input
                        className="input"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </label>
                <label className="label">
                    Teléfono
                    <input
                        className="input"
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </label>
                <label className="label">
                    Email
                    <input
                        className="input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label className="label">
                    Verificación de Email
                    <input
                        className="input"
                        type="email"
                        value={emailVerification}
                        onChange={(e) => setEmailVerification(e.target.value)}
                        required
                    />
                </label>
                <div className="button-container">
                    <button type="submit" className="checkout-button">
                        Completar Pedido
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;
