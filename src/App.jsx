



import './App.css';
import ProductsComponent from './components/ProductsView/ProductsComponent';
import NavBar from './components/navigation/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleProd from './components/ProductView/SingleProd';
import ItemListContainer from './components/ItemListContainer';

function App() {
    return(
        <>
        <BrowserRouter>
        <NavBar/>
        <ItemListContainer/>
        <Routes>
            <Route exact path='/' element={<ProductsComponent/>}/>               
            <Route exact path='/product/:proId' element={<SingleProd/>}/>    
            <Route exact path='/contact' element={<ContactComponent/>}/>     
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