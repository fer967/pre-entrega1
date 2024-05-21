import { Link } from "react-router-dom";
import './ProductCard.css';

export default function ProductCard({title, price, image, idProd}){
    return(
        <>
        <div className="item">
            <h4>{title}</h4>
            <img src={image} alt={title} />
            <p>Price: $ {price}</p>
            <button><Link to = {`/product/${idProd}`}>ver detalles</Link></button>
        </div>
        </>
    );
};