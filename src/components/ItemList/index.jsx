import { Item } from "../Item";
import "./style.scss";
import React, { useState } from 'react'

export const ItemList = ({listProducts}) => {
    const[cart, setCard] = useState ([])
    const[agregado, setAgregado] = useState(false)

    function addCart (producto){
        //validar stock aquí
        setCard ([...cart, producto])
        setAgregado(true)
    }

    return(
        <section className = "itemContainer">
            {listProducts.map(producto => {
                return(
                    <>
                    {agregado ? <button>Terminar Compra</button> :
                        <Item key={producto.id} stock={producto.availableStock} nombre={producto.name} precio={producto.price} imagen={producto.image} addCart={addCart}/>
                    }
                    </>
                )
            })}
        </section>
    )
}

