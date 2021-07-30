import { Item } from "../Item";
import "./style.scss";


export const ItemList = ({productos}) => {
    console.log(productos)
    // const { cambiarStock } = useContext(CartContext)
    return(
        <section className = "itemContainer">
            {productos.map((producto, index) =>
                    <Item key={index} id={producto.id} stock={producto.availableStock} nombre={producto.name} precio={producto.price} imagen={producto.image}/>
            )}
        </section>
    )
}
