import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategory } from "../../asyncMock";
import ProductCard from "../ProductsView/ProductCard";
import './CategoryComponent.css';

export default function CategoryComponent() {
    const [category, setCategory] = useState([]);
    const { categoryName } = useParams();
    useEffect(() => {
        setCategory(getCategory(categoryName))
    }, [categoryName]);
    return (
        <>
            <div className="category">
                {category.map((prod) => (<ProductCard title={prod.title} price={prod.price} 
                image={prod.image} idProd={prod.id} />))}
            </div>
        </>
    );
}
