
import'./NavBar.css';
import {Link} from "react-router-dom";

export default function NavBar(){
    return(
        <nav className="barra">
            <button><Link to={'/'}>Home</Link></button>
            <button><Link to={'/products'}>Products</Link></button>
            <button><Link to={'/contact'}>Contact</Link></button>
        </nav>
    );
}


/*
<button><Link to={'/'}>Brand</Link></button>
<button><Link to={'/category/:categoryName'}>Cuerdas</Link></button>         // ver categoryName
<button><Link to={'/category/:categoryName'}>Vientos</Link></button>
<button><Link to={'/category/:categoryName'}>Percusion</Link></button>
<button><Link to={'/category/:categoryName'}>Teclados</Link></button>
<CartWidget/>                                                                // importar 


*/