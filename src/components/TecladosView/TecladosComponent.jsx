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
        <h2>teclados - pianos</h2>
        <article>
            {products.filter((prod)=>prod.category==category)};
        </article>
        </>
    )
}