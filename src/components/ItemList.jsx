import { Item } from "./Item";
import "../style/ItemList.scss"
import { useParams } from "react-router-dom";

export const ItemList = ({ listProducts }) => {
    return (
        <section className="itemContainer">
            {listProducts.map((producto, index) =>
                <Item
                    key={index}
                    id={producto.id}
                    stock={producto.availableStock}
                    nombre={producto.name}
                    precio={producto.price}
                    imagen={producto.image}
                />
            )}
        </section>
    )
}
