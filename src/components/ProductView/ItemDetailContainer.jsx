import { useParams } from "react-router-dom";
import { getProduct } from "../../asyncMock";
import { useEffect, useState } from "react";
import './ItemDetailContainer.css';


export default function ItemDetailContainer(){             
    const[product, setProduct] = useState({});
    const{proId} = useParams();
    useEffect(() => {
        setProduct(getProduct(proId))
    }, [])
    return(
        <>
        <div className="detalle">
        <h1>Detalles del producto</h1>
        <p>id: {proId}</p>
        <h3>nombre: {product.title}</h3>
        <p>precio: {product.price}</p>
        <p>categoria: {product.category}</p>
        <p>descripcion: {product.description}</p>
        <img src={product.image} alt={product.title} />
        </div>
        </>
    );
}