import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Item } from "../Item";
import "./style.scss";

export const ItemList = () => {
    const { listProducts } = useContext(CartContext);

    return(
        <section className = "itemContainer">
            {listProducts.map(producto => {
                return(
                    <>
                    <Item key={producto.id} id={producto.id} stock={producto.availableStock} nombre={producto.name} precio={producto.price} imagen={producto.image}/>
                    </>
                )
            })}
        </section>
    )
}

