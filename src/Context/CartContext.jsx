import {createContext} from 'react'
import React, { useState } from 'react'
// import { productosJson } from "../FirebaseMock"


export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const[cart, setCard] = useState ([])
    const[agregado, setAgregado] = useState(false)
    // const[cantidad, setCantidad] = useState(0)

    function addCart (producto){
        setCard ([...cart, producto])
      }
      setAgregado(true)


  //     useEffect(() => {
  //   const totalCantidad = cart.map(productosJson.price * productosJson.availableStock)

  // })
  
    return (
        <CartContext.Provider value={{ addCart, agregado}}>
            {children}
        </CartContext.Provider>
    )
}