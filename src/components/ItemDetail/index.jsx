import "./style.scss";
// import { saludoBotonAgregar } from '../../utils/generales';
import { ItemCount } from "../ItemCount"
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext";
import { useContext, useState } from "react";


export const ItemDetail = ({ id, stock, precio, imagen, descripcion, initial}) =>{
    const [ counter, setCounter] = useState()

    // const {addCart, agregado} = useContext(CartContext)

    //al hacer click agrega uno
    function add(){
        if (counter < stock ){
            setCounter(counter+1)
        }
    }

     //al hacer click rebaja uno si el stock es mayor al valor inicial
    function restar() {
        if (counter > initial ){
            setCounter(counter-1)
        }
    }
    
    return(
        <div className="cardItemDetail">
            <div className="cardDetail">
               <img className="card-img-top" src={imagen} alt="imagen"></img>
            </div>
            <div className="card-body">{id}
                <h4 className="card-title">{descripcion}</h4>
                <h6 className="card-text">Cantidades Disponibles: {stock}</h6>
                <p className="priceItem">${precio}</p>
                <ItemCount stock={5} initial={1} add={add} restar={restar} counter={counter} id={id}/>
                {/* <button className="btn btn-danger" onClick= {() => { addCart({id})}}>Agregar al Carrito</button>
                <Link to={"/"}>{agregado ? <button className="btn btn-success">Producto Agregado ✔️ Quieres seguir comprando?</button> : false} </Link> */}
           </div>
        </div>
    )
}