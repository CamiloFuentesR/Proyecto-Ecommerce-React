import React from 'react'

export const listaDeCarrito = () => {

    const carrito = localStorage.getItem('carrito');


    return (
        <div>
            <h2>{carrito}</h2>
        </div>
    )
}
