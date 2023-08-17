import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => { 
    return (
        <nav>
            <Link to='/' class="button is-primary">
                <h3>Ecomm</h3>
            </Link>
            <div>
                <NavLink to={'/category/Celulares'}class="button is-primary" className={({isActive})=>isActive ? 'ActiveOption':'Option'}>Celulares</NavLink>
                <NavLink to={'/category/Tablets'} class="button is-primary" className={({isActive})=>isActive ? 'ActiveOption':'Option'}>Tablets</NavLink>
                <NavLink to={'/category/Notebooks'} class="button is-primary" className={({isActive})=>isActive ? 'ActiveOption':'Option'}>Notebooks</NavLink>
                
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar
