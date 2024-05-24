



import './App.css';
import ProductsComponent from './components/ProductsView/ProductsComponent';
import NavBar from './components/navigation/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ProductView/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import CuerdasComponent from './components/CuerdasView/CuerdasComponent';
import VientosComponent from './components/VientosView/VientosComponent';
import PercusionComponent from './components/PercusionView/PercusionComponent';
import TecladosComponent from './components/TecladosView/TecladosComponent';

function App() {
    return(
        <>
        <BrowserRouter>
        <NavBar/>
        <ItemListContainer/>
        <Routes>
            <Route exact path='/' element={<ProductsComponent/>}/>                    // ItemListContainer             
            <Route exact path='/product/:proId' element={<ItemDetailContainer/>}/> 
            <Route exact path='/category/:categoryName' element={<CuerdasComponent/>}/>    // una sola ruta para category
            <Route exact path='/vientos' element={<VientosComponent/>}/>                 // y tambien mostrar comp ItemLC
            <Route exact path='/percusion' element={<PercusionComponent/>}/>
            <Route exact path='/teclados' element={<TecladosComponent/>}/>
        </Routes>
        </BrowserRouter>           
        </>
    )
}

export default App;








//---- pre-entrega3 ----
/*import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';

function App() {

    return (
        <>
            <header className='contenedor'>
                <h1>Instrumentos Musicales</h1>
                <NavBar />
                <CartWidget />
            </header>
            <main>
                <ItemListContainer greeting={'Bienvenidos a mi tienda !'} />
            </main>
        </>
    )
}

export default App */