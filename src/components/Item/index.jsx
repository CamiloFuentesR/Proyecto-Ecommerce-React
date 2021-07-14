import "./style.scss";
import estrellas from "./estrellas.png";
import { Link } from "react-router-dom";

export function Item ({nombre, precio, imagen, stock, addCart }){
    return (
        <div className="card">
            <div className="contenedorImagen">
                <img className="imagen" src={imagen} alt="imagen"/>
            </div>
            <h3>{nombre}</h3>
            <img className="estrellas" src={estrellas} alt="estrellas" />
            <p className="precio">${precio}</p>
            <span className="nuevoPrecio"> ANTES $39.990</span>
            <b>Sólo {stock} unidades disponibles</b>
            <Link to={"/detalle"}><button className="btn btn-info">Info del producto</button></Link>
        </div>
    )
} 