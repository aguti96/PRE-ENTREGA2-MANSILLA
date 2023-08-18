import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'
import './NavBar.css'; 

const NavBar = () => { 
    return (
        <nav className="navbar">
            <Link to='/' className="logo">
                <h3>Ecomm</h3>
            </Link>
            <div className="nav-links">
                <NavLink to={'/category/Celulares'} className="nav-link">Celulares</NavLink>
                <NavLink to={'/category/Tablets'} className="nav-link">Tablets</NavLink>
                <NavLink to={'/category/Notebooks'} className="nav-link">Notebooks</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar
