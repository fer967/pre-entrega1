
import './ItemListContainer.css';
import { useState } from "react";
import { getProducts } from '../asyncMock';
import { useEffect } from "react";
import ProductCard from './ProductsView/ProductCard';

export default function ItemListContainer() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts.then(data => setProducts(data));
    }, [])
    return (
        <>
            <div className='container'>
                <h1>Nuestros Productos</h1>
                <article className="products">
                    {products.map(product => (<ProductCard title={product.title} price={product.price} image={product.image} idProd={product.id} />))}
                </article>
            </div>
        </>
    );
};