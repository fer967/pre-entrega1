
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

<BotonComponente texto='Home' path='/'/>
            <BotonComponente texto='Products' path='/products'/>
            <BotonComponente texto='Contact' path='/contact'/>
*/