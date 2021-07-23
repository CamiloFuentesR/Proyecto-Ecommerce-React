import React, { useEffect, useState} from 'react'
import "./style.scss";


export const Contador = ({stock, initial}) => {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        //cuando se montó el componente y se ejecuta una sola vez
        setContador(1);
    }, []);

    return (
        <div className="itemCount">
            <button className="btn btn-info" onClick={() => {contador === initial ? alert("cantida mínima 1 unidad") : setContador(contador -1) }}>-</button>
            <span className="numeroContador">{contador}</span>
            <button className="btn btn-info" onClick={() => {stock === contador ? alert("No tenemos más stock") : setContador(contador +1)}}>+</button>
        </div>
    )
}