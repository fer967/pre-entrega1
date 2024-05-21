
import CartWidget from '../CartWidget';
import'./NavBar.css';
import {Link} from "react-router-dom";

export default function NavBar(){
    return(
        <nav className="barra">
            <button><Link to={'/'}>Brand</Link></button>
            <button><Link to={'/category/:categoryName'}>Cuerdas</Link></button>
            <button><Link to={'/vientos'}>Vientos</Link></button>
            <button><Link to={'/percusion'}>Percusion</Link></button>
            <button><Link to={'/teclados'}>Teclados</Link></button>
            <CartWidget/>
        </nav>
    );
}


