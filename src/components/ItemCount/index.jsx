import React, {useEffect, useState} from 'react'

export const Contador = ({stock, initial, onAdd}) => {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        //cuando se montó el componente y se ejecuat una sola vez
        setContador(0);
        console.log(`Estoy creada`)
    }, []);

    // function sumar(){
    //     if (stock === contador){
    //         alert("mo tenemos más stock")
    //     }else{
    //         setContador(contador +1)
    //         console.log(`¡tenemos 5 unidades disponibles!`)
    //     }

    return (
        <div className="itemCount">
            <button className="btn btn-info" onClick={() => {setContador(contador -1)}}>-</button>
            {contador}
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
