import { Item } from "../Item";
import "./style.scss";

export const ItemList = (productos) => {
    console.log(productos)

    return(
        <section className = "itemContainer">
            {productos.map(producto => {
                return(
                    <>
                    <Item key={producto.id} id={producto.id} stock={producto.availableStock} nombre={producto.name} precio={producto.price} imagen={producto.image}/>
                    </>
                )
            })}
        </section>
    )
}

