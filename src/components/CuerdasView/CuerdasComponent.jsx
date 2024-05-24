import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategory } from "../../asyncMock";

export default function CuerdasComponent(){
    const[products, setProducts] = useState([]);
    const{categoryName} = useParams();

    useEffect(()=>{
        setProducts(getCategory(categoryName))
    }, [])

    return(
        <>
        <h2>instrumentos de cuerdas</h2>
        <article>
        {products.filter(product => product.category==cuerdas)}
        </article>
        </>
    );
}