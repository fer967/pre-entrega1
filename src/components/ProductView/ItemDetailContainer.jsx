import { useParams } from "react-router-dom";
import { getProduct } from "../../asyncMock";
import { useEffect, useState } from "react";
import './ItemDetailContainer.css';
import ItemCount from "../CountView/ItemCount";

export default function ItemDetailContainer() {
    const [product, setProduct] = useState({});
    const { proId } = useParams();
    useEffect(() => {
        setProduct(getProduct(proId))
    }, [])
    return (
        <>
            <div className="itemContainer">
                <article className="detalle">
                    <h1>Detalles del producto</h1>
                    <p>id: {proId}</p>
                    <h3>nombre: {product.title}</h3>
                    <p>precio: {product.price}</p>
                    <p>categoria: {product.category}</p>
                    <p>descripcion: {product.description}</p>
                    <img src={product.image} alt={product.title} />
                    <p>en stock: 4</p>
                    <ItemCount />
                </article>
            </div>
        </>
    );
}