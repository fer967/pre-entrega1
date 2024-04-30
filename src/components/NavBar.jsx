
import'./NavBar.css';
import BotonComponente from "./BotonComponente";

export default function NavBar(){
    const clickEnNosotros = ()=>{
        console.log('Hiciste click en Nosotros');
    }
    const clickEnProductos = ()=>{
        console.log('Hiciste click en Productos');
    }
    const clickEnContacto = ()=>{
        console.log('Hiciste click en Contacto');
    }
    return(
        <>
        <nav className='barra'>
        <BotonComponente texto='Sobre Nosotros' callback={clickEnNosotros} color='yellow'/>    
        <BotonComponente texto='Productos' callback={clickEnProductos} color='red'/>
        <BotonComponente texto='Contacto' callback={clickEnContacto} color='green'/>
        </nav>
        </>
    )
}

