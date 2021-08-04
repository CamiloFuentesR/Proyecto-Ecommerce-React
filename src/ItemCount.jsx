import React, { useContext, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import "./ItemCount.scss";


export const ItemCount = ({stock, initial, add, restar, counter, id}) => {
    const [ open, setOpen ] = useState(false)

    const { addCart } = useContext(CartContext)

    function agregarYAbrir(item, counter, id){
        addCart(item, counter, id);
        setOpen(true)
    }
    // const [contador, setContador] = useState(0);

    // useEffect(() => {
    //     //cuando se montó el componente y se ejecuta una sola vez
    //     setContador(1);
    // }, []);

    return (
        <div className="itemCount">
            <div>
                <button className="btn btn-info" onClick={restar}>-</button>
                <span className="numeroContador">{counter}</span>
                <button className="btn btn-info" onClick={add}>+</button>
            </div>
            {!open ? (
            <button className="btn btn-danger" onClick= {() => agregarYAbrir(id, counter)}>Agregar al Carrito</button>) :
            (<Link to={"/cart"}><button className="btn btn-success">Producto Agregado ✔️ Terminar Compra</button></Link>)}
        </div>
    )
}

/**
 * codigo antiguo
        <div className="itemCount">
            <button className="btn btn-info" onClick={() => {contador === initial ? alert("cantida mínima 1 unidad") : setContador(contador -1) }}>-</button>
            <span className="numeroContador">{contador}</span>
            <button className="btn btn-info" onClick={() => {stock === contador ? alert("No tenemos más stock") : setContador(contador +1)}}>+</button>
        </div>
 */