import {createContext, useEffect} from 'react'
import React, { useState } from 'react'
import { getFirestore } from "../Firebase"
// import { productosJson } from "../FirebaseMock"


export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const[cart, setCard] = useState ([])
    const[agregado, setAgregado] = useState(false)
    // const[cantidad, setCantidad] = useState(0)


    function isInCart(id){
        const item = cart.find(res => res.id === parseInt(id))
        console.log(item)
        if (item === undefined){
            return false
        }else{
            return true
        }
    }

    function addCart (producto){
        if(isInCart(id)){
            const items = cart.find(response => response.id === id)
            console.log(items)
            const nuevoItem = {id: items.id, name: items.name, price: items.price, description: items.description, categoryId: items.categoryId}
            const nuevosItems = cart.filter(producto => producto.id !== id)
            const itemEnCarrito = [...nuevosItems, nuevoItem]
            setCard(itemEnCarrito)
        }else{
            const itemSeleccion = {id:producto.id, name:producto.name, price:producto.price, description:producto.description, categoryId:producto.categoryId}
            setCard([...cart, itemSeleccion])
            setAgregado(true)
        }
      }


      useEffect(() => {
        const DB = getFirestore(); // Contectando a la BD 
        const COLLECTION = DB.collection('productos'); // Tomando la coleccion de productos
        COLLECTION.get().then(( response ) => {
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