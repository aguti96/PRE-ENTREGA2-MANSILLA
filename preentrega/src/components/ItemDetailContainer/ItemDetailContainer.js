import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import { getDoc, doc } from "firebase/firestore"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { db } from "../../services/firebase/firebaseConfig"



const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams ()

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
        

        
    }, [itemId])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer