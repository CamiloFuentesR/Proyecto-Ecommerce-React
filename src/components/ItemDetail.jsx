import "../style/ItemDetail.scss";
import { ItemCount } from "./ItemCount"
import { useState } from "react";

export const ItemDetail = ({ id, stock, precio, imagen, descripcion, initial }) => {
    const [counter, setCounter] = useState()

    function add() {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }

    function restar() {
        if (counter > initial) {
            setCounter(counter - 1)
        }
    }

    return (
        <div className="cardItemDetail">
            <div className="cardDetail">
                <img className="card-img-top" src={imagen} alt="imagen"></img>
            </div>
            <div className="card-body">{id}
                <h4 className="card-title">{descripcion}</h4>
                <h6 className="card-text">Cantidades Disponibles: {stock}</h6>
                <p className="priceItem">${precio}</p>
                <ItemCount stock={5} initial={1} add={add} restar={restar} counter={counter} id={id} />
            </div>
        </div>
    )
}