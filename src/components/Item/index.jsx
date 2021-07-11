import "./style.scss";
import { saludoBotonAgregar } from '../../utils/generales';
import estrellas from "./estrellas.png";
import { Contador } from "../ItemCount";
import { Link } from "react-router-dom";

export function Item ({nombre, precio, imagen}){
    return (
        <div className="card">
            <img className="curso1" src={imagen} alt="curso1"/>
            <h3>{nombre}</h3>
            <img className="estrellas" src={estrellas} alt="estrellas" />
            <p className="precio">{precio}</p>
            <span className="nuevoPrecio"> ANTES $19.990</span>
            <b>Sólo 5 unidades disponibles</b>
            <Contador stock={5} initial={1}/>
            <Link to={"/detalle"}><button className="btn btn-info" onClick= {() => {saludoBotonAgregar(alert(`Agregamos al Carrito`))}}>Info del producto</button></Link>
        </div>
    )
}