
import './App.css';
import HomeComponent from './components/HomeView/HomeComponent';
import ProductsComponent from './components/ProductsView/ProductsComponent';
import ContactComponent from './components/ContactView/ContactComponent';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return(
        <>
        <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route exact path='/' element={<HomeComponent/>}/>
            <Route exact path='/products' element={<ProductsComponent/>}/>
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