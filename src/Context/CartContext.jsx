import {createContext, useEffect} from 'react'
import React, { useState } from 'react'
import { getFirestore } from "../Firebase"
// import { productosJson } from "../FirebaseMock"


export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const[cart, setCard] = useState ([])
    const[agregado, setAgregado] = useState(false)
    // const[cantidad, setCantidad] = useState(0)

    function addCart (producto){
        setCard ([...cart, producto])
        setAgregado(true)
      }


      useEffect(() => {
        const DB = getFirestore(); // Contectando a la BD 
        const COLLETION = DB.collection('productos'); // Tomando la coleccion de productos
        COLLETION.get().then(( response ) => {
            console.log(response.docs);
            response.docs.forEach((documento) => {
                console.log(documento.data());
            })
        });
  //   const totalCantidad = cart.map(productosJson.price * productosJson.availableStock)

  }, [])
  
    return (
        <CartContext.Provider value={{ addCart, agregado}}>
            {children}
        </CartContext.Provider>
    )
}