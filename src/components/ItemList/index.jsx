import { Item } from "../Item";
import "./style.scss";

export const ItemList = ({listProducts}) => {
    return(
        <section>
            {listProducts.map(producto => {
                return(
                    <div className = "itemListContainer">
                        <Item key={producto.id} nombre={producto.title} precio={producto.price} imagen={producto.thumbnail}/>
                    </div>
                )
            })}
        </section>
    )
}

