import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import "../style/ItemCount.scss";


export const ItemCount = ({ stock,id }) => {
    const [open, setOpen] = useState(false)
    const [count, setCount] = useState(1);
    const { addCart } = useContext(CartContext)

    const restar = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }
    const add = () => {
        if (count <= stock) {
            setCount(count + 1);
        }
    }


    function agregarYAbrir(item, counter, id) {
        addCart(item, counter, id);
        setOpen(true)
    }


    const AgregarAlCarrito = () => {
        console.log('Agregatr al carrito');
    }

    return (
        <div className="itemCount">
            <div>
                <button className="btn btn-info" onClick={restar}>-</button>
                <span className="numeroContador">{count}</span>
                <button className="btn btn-info" onClick={add}>+</button>
            </div>
            <button
                className="btn btn-success"
                onClick={AgregarAlCarrito}
            >
                Agregar al Carrito
            </button>
            {/* {!open ? (
            <button className="btn btn-danger" onClick= {() => agregarYAbrir(id, counter)}>Agregar al Carrito</button>) :
            (<Link to={"/cart"}><button className="btn btn-success">Producto Agregado ✔️ Terminar Compra</button></Link>)} */}
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