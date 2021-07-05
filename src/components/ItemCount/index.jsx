import React, {useEffect, useState} from 'react'
import "./style.scss";

export const Contador = ({stock, initial, onAdd}) => {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        //cuando se montó el componente y se ejecuat una sola vez
        setContador(1);
        console.log(`Estoy creada`)
    }, []);

    return (
        <div className="itemCount">
            <button className="btn btn-info" onClick={() => {contador === initial ? alert("cantida mínima 1 unidad") : setContador(contador -1) }}>-</button>
            <span className="numeroContador">{contador}</span>
            <button className="btn btn-info" onClick={() => {stock === contador ? alert("No tenemos más stock") : setContador(contador +1)}}>+</button>
        </div>
    )
}
// }

export const ButtonComponent = () => {
    const [numero, setNumero] = useState(0);

    const aumentar = () => {
        console.log(`hiciste click`)
        setNumero(numero + 1)
    }
    return (
        <>
        <p>componente contador {numero}</p>
        <button onClick={aumentar}>Aumentar</button>
        </>
    )
}
