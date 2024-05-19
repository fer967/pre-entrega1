
import './App.css';
import HomeComponent from './components/HomeView/HomeComponent';
import ProductsComponent from './components/ProductsView/ProductsComponent';
import ContactComponent from './components/ContactView/ContactComponent';
import NavBar from './components/navigation/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleProd from './components/ProductView/SingleProd';

function App() {
    return(
        <>
        <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route exact path='/' element={<HomeComponent/>}/>               // BrandComponent
            <Route exact path='/products' element={<ProductsComponent/>}/>   // Category/:categoryName
            <Route exact path='/product/:proId' element={<SingleProd/>}/>    // ItemDetailContainer 
            <Route exact path='/contact' element={<ContactComponent/>}/>     // no va
        </Routes>
        </BrowserRouter>
        </>                                                                  // ItemListContainer ??
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