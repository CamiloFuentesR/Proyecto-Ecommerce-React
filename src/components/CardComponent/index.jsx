import "./style.scss";
import { saludoBotonAgregar } from '../../utils/generales';
import estrellas from "./estrellas.png";
import imagenCurso3 from "./curso3.png";
import { Contador } from "../ItemCount";


export function CardComponent({greeting}){
    return (
        <div className="card">
            <img className="curso1" src={imagenCurso3} alt="curso1"/>
            <h2>React JS</h2>
            <h6>React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página..</h6>
            <img className="estrellas" src={estrellas} alt="estrellas" />
            <p className="precio">$9.990 CLP</p>
            <span className="nuevoPrecio"> ANTES $19.990</span>
            <Contador stock="5" initial="1"/>
            <button className="agregarCarrito" onClick= {() => {saludoBotonAgregar(alert(`Agregamos al Carrito`))}}>Agregar al Carrito</button>
        </div>
    )
}