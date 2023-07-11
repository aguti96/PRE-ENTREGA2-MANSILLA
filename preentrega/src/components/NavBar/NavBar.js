import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { NavLink, Link } from "react-router-dom"


const Navbar = () =>{
   return (
    <nav className ="NavBar" >
        <Link to= "/">
            <h3>Ecommerce</h3>
        </Link>
        <div className="categories">
            <NavLink to={`/category/Celulares`} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Celulares</NavLink>
            <NavLink to={`/category/Tablets`} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Tablets</NavLink>
            <NavLink to={`/category/Notebooks`} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Notebooks</NavLink>

        </div>
        <CartWidget />
    </nav>
   )
}

export default Navbar