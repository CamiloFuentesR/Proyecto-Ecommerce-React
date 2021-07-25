import {createContext, useEffect} from 'react'
import React, { useState } from 'react'
import { getFirestore } from "../Firebase"
// import { productosJson } from "../FirebaseMock"


export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [listProducts, setListProducts] = useState([]);
    // const [productUnit, setProductUnit] = useState([])
    const[cart, setCard] = useState ([])
    const[agregado, setAgregado] = useState(false)
    // const[cantidad, setCantidad] = useState(0)

    useEffect(() => {
        async function getDataFromFirestore (){ 
            const DB = getFirestore(); 
            const COLLECTION = DB.collection('Productos');
            const response = await COLLECTION.get();
            const aux = response.docs.map(element => {
                return {id: element.id, ...element.data()}
            });
            setListProducts(aux)
            console.log(setListProducts)
        }
        getDataFromFirestore()
    }, [])

    
    //   const totalCantidad = cart.map(productosJson.price * productosJson.availableStock)

    function isInCart(id){
        const item = cart.find(res => res.id === parseInt(id))
        console.log(item)
        if (item === undefined){
            return false
        }else{
            return true
        }
    }

    function addCart (producto, id){
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

    //   function cambiarStock(id){
    //       const nuevoStock = firebase.map(producto =>{
    //           if(producto.id === id) {
    //               producto.stock -- //acá en -- colocar una variable
    //           }
    //           return producto;
    //       })
    //       setListProducts(nuevoStock)
    //   }

    return (
        <CartContext.Provider value={{ listProducts, addCart, agregado}}>
            {children}
        </CartContext.Provider>
    )
}