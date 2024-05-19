import { Link } from "react-router-dom";

export default function ProductCard({title, price, image, idProd}){
    return(
        <>
        <div style={{border:'solid 2px red', padding:10}}
        >
            <h4>{title}</h4>
            <img src={image} alt={title} />
            <p>Price: $ {price}</p>
            <button><Link to = {`/product/${idProd}`}>ver detalles</Link></button>
        </div>
        </>
    );
};