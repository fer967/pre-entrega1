
import CartWidget from '../CartWidget';
import'./NavBar.css';
import {Link} from "react-router-dom";

export default function NavBar(){
    return(
        <nav className="barra">
            <button><Link to={'/'}>Brand</Link></button>
            <button><Link to={'/category/cuerdas'}>Cuerdas</Link></button>
            <button><Link to={'/category/vientos'}>Vientos</Link></button>
            <button><Link to={'/category/percusion'}>Percusion</Link></button>
            <button><Link to={'/category/teclados'}>Teclados</Link></button>
            <CartWidget/>
        </nav>
    );
}


