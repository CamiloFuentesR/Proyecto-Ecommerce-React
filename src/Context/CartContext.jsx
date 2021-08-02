import {createContext, useEffect} from 'react'
import React, { useState } from 'react'
import { getFirestore } from "../Firebase"


export const CartContext = createContext();

export const CartProvider = ({children}) => {
    //Estados para la base de datos
    const [listProducts, setListProducts] = useState([]);
    const [listCategorias, setListCategorias] = useState({})

    //Estados para el Carrito de Compras
    const[cart, setCard] = useState ([])
    const[agregado, setAgregado] = useState(false)
    const[ cantidad, setCantidad ] = useState(0)
    const[ total, setTotal ] = useState()

    useEffect(() => {
            const DB = getFirestore(); 
            const COLLECTION = DB.collection('Productos');
            const response = COLLECTION.get();
            response.then((result) => {
                setListProducts(result.docs.map( p => ({id: p.id, ...p.data()})))
                console.log(setListProducts.result)
            })
    }, [])


    //Reviso que mis productos estén en el carrito
    function isInCart(id){
        const item = cart.find(res => res.id === parseInt(id))
        console.log(item)
        if (item === undefined){
            return false
        }else{
            return true
        }
    }

    function addCart (producto, counter, id){
        if(isInCart(id)){
            const items = cart.find(response => response.id === id)
            const sumaCantidad = items.monto + counter
            const nuevoItem = {id: items.id, name: items.name, price: items.price, description: items.description, categoryId: items.categoryId, monto: sumaCantidad }
            const nuevosItems = cart.filter(producto => producto.id !== id)
            const itemEnCarrito = [...nuevosItems, nuevoItem]
            setCard(itemEnCarrito)
        }else{
            const itemSeleccion = {id:producto.id, name:producto.name, price:producto.price, description:producto.description, categoryId:producto.categoryId, monto: counter}
            setCard([...cart, itemSeleccion])
            setAgregado(true)
        }
      }
      

    useEffect(() => {
        var total = 0
        const totales = cart.map( producto => producto.price * producto.monto)
        totales.map( producto => total = total + producto) // total por producto unitario
        setTotal(total)
        const cantidadCarrito = cart.length
        setCantidad(cantidadCarrito)
    }, [cart])


    // const[cantidad, setCantidad] = useState(0)

    // const { id } = useParams()


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
        <CartContext.Provider value={{ listProducts, listCategorias, cantidad, addCart, agregado}}>
            {children}
        </CartContext.Provider>
    )
}