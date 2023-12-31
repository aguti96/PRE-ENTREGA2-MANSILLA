import { getDoc, doc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../services/firebase/firebase";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        const getProductById = async (itemId) => {
            const docRef = doc(db, "Items", itemId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                return { id: docSnap.id, ...docSnap.data() };
            } else {
                return null;
            }
        };

        getProductById(itemId)
            .then(response => {
                setProduct(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, [itemId]);

    return (
        <div className="item-detail-container">
            {product ? (
                <ItemDetail {...product} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ItemDetailContainer;

