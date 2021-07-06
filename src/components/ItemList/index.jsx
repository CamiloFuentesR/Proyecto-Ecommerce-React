import { Item } from "../Item";
import "./style.scss";

export const ItemList = ({listProducts}) => {
    return(
        <section className = "itemContainer">
            {listProducts.map(producto => {
                return(
                    <Item key={producto.id} nombre={producto.title} precio={producto.price} imagen={producto.thumbnail}/>
                )
            })}
        </section>
    )
}

