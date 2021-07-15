import "./style.scss";
import { saludoBotonAgregar } from '../../utils/generales';
import { Contador } from "../ItemCount"


export const ItemDetail = ({ id, stock, precio, imagen, descripcion}) =>{

    return(
        <div className="cardItemDetail">
            <div className="cardDetail">
               <img className="card-img-top" src={imagen} alt="imagen"></img>
            </div>
            <div className="card-body">{id}
                <h4 className="card-title">{descripcion}</h4>
                <h6 className="card-text">Cantidades Disponibles: {stock}</h6>
                <p className="priceItem">${precio}</p>
                <button className="btn btn-danger" onClick= {() => {saludoBotonAgregar(alert(`Agregamos tu producto al Carrito`))}}>Agregar al Carrito</button>
                <Contador stock={5} initial={1}/>
           </div>
        </div>
    )
}