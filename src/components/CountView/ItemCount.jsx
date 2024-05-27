
import './ItemCount.css';

export default function ItemCount() {
    return (
        <>
            <div className='itemCount'>
                <article className="count">
                    <button>-</button>
                    <h3>0</h3>
                    <button>+</button>
                </article>
                <article>
                    <button>agregar al carrito</button>
                </article>
            </div>
        </>
    )
}