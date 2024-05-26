
import './App.css';
import NavBar from './components/navigation/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ProductView/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import CategoryComponent from './components/CategoryView/CategoryComponent';

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route exact path='/' element={<ItemListContainer />} />
                    <Route exact path='/product/:proId' element={<ItemDetailContainer />} />
                    <Route exact path='/category/:categoryName' element={<CategoryComponent/>} />
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