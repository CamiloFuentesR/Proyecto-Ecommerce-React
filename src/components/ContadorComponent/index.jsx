import React, {useState} from 'react'

export const Contador = () => {
    const [numero, setNumero] = useState(0);

    const aumentar = () => {
        console.log(`hiciste click`)
        setNumero(numero + 1)
    }
    return (
        <>
        <h3>componente contador {numero}</h3>
        <button onClick={aumentar}>Aumentar</button>
        </>
    )
}
