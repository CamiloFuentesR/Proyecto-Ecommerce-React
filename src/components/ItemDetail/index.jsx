import "./style.scss";
// import { saludoBotonAgregar } from '../../utils/generales';
import { Contador } from "../ItemCount"
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";


export const ItemDetail = ({ id, stock, precio, imagen, descripcion}) =>{

    const {addCart, agregado} = useContext(CartContext)

    return(
        <div className="cardItemDetail">
            <div className="cardDetail">
               <img className="card-img-top" src={imagen} alt="imagen"></img>
            </div>
            <div className="card-body">{id}
                <h4 className="card-title">{descripcion}</h4>
                <h6 className="card-text">Cantidades Disponibles: {stock}</h6>
                <p className="priceItem">${precio}</p>
                <Contador stock={5} initial={1}/>
                <button className="btn btn-danger" onClick= {() => { addCart({id})}}>Agregar al Carrito</button>
                <Link to={"/"}>{agregado ? <button className="btn btn-success">Producto Agregado ✔️ Quieres seguir comprando?</button> : false} </Link>
           </div>
        </div>
    )
}