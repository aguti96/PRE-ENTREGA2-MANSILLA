import { Link } from "react-router-dom"


const Item = ({id, name, imagen, price, stock}) => {

    return(
        <article className="CardItem">
            <header className="header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={imagen} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="info">
                    Precio: ${price}

                </p>
                <p className="info">
                    Stock disponible: {stock}
                </p>
            

            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className="Option"> Ver detalle </Link>
            </footer>
        </article>
    )
}

export default Item