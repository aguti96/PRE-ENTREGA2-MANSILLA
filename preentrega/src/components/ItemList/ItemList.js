import React from "react";
import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
    return (
        <div className="item-list">
            <h2 className="item-list-title">Productos Disponibles</h2>
            <div className="item-list-container">
                {products.map((prod) => (
                    <Item key={prod.id} {...prod} />
                ))}
            </div>
        </div>
    );
};

export default ItemList;
