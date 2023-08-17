import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => { 
    return (
        <nav>
            <Link to='/' class="button is-primary">
                <h3>Ecomm</h3>
            </Link>
            <div>
                <NavLink to={'/categoria/amigurumi'}class="button is-primary" className={({isActive})=>isActive ? 'ActiveOption':'Option'}>Amigurumis</NavLink>
                <NavLink to={'/categoria/accesorios'} class="button is-primary" className={({isActive})=>isActive ? 'ActiveOption':'Option'}>Accesorios</NavLink>
                <NavLink to={'/categoria/decoracion'} class="button is-primary" className={({isActive})=>isActive ? 'ActiveOption':'Option'}>Decoracion</NavLink>
                <NavLink to={'/categoria/bebe'} class="button is-primary" className={({isActive})=>isActive ? 'ActiveOption':'Option'}>Articulos de Bebe</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar
