import {createContext} from 'react'
import React, { useState, useEffect } from 'react'
import imagen1 from "../Images/ZapatillasBlanca.jpg"
import imagen2 from "../Images/ZapatillasNegro.jpg"
import imagen3 from "../Images/PoleronRosado.jpg"
import imagen4 from "../Images/PoleronNegro.jpg"
import imagen5 from "../Images/MochilaMinnie.jpg"
import imagen6 from "../Images/MochilaUnisex.jpg"
import imagen7 from "../Images/MochilaUnisexRosado.jpg"
import imagen8 from "../Images/MochilaUniverso.jpg"


const productosJson = [{
    id: 1,
    availableStock: 5,
    name: "Zapatilla Mujer",
    price: "30.000",
    image: imagen1,
    description: "Zapatilla Mujer Adidas blanca",
    categoryId: "Mujer",
  },{
    id: 2,
    availableStock: 5,
    name: "Zapatilla Mujer",
    price: "30.000",
    image: imagen2,
    description: "Zapatilla Mujer Adidas negra",
    categoryId: "Mujer",
  },{
    id: 3,
    availableStock: 5,
    name: "Polerón Mujer",
    price: "20.000",
    image: imagen3,
    description: "Polerón Adidas Rosado",
    categoryId: "Hombre",
  },{
    id: 4,
    availableStock: 5,
    name: "Polerón Hombre",
    price: "15.000",
    image: imagen4,
    description: "Polerón negro con capucha Hombre",
    categoryId: "Hombre",
  },{
    id: 5,
    availableStock: 5,
    name: "Mochila Kids",
    price: "15.000",
    image: imagen5,
    description: "Mochila monster Inc",
    categoryId: "Niños/Niñas",
  },{
    id: 6,
    availableStock: 5,
    name: "Mochila Kids",
    price: "15.000",
    image: imagen6,
    description: "Mochila Wall-e",
    categoryId: "Niños/Niñas",
  },{
    id: 7,
    availableStock: 5,
    name: "Mochila Kids",
    price: "15.000",
    image: imagen7,
    description: "Mochila Toy Story",
    categoryId: "Niños/Niñas",
  },{
    id: 8,
    availableStock: 5,
    name: "Mochila Kids",
    price: "15.000",
    image: imagen8,
    description: "Mochila Nemo",
    categoryId: "Niños/Niñas",
  }
  ]

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const[listProducts, setListProducts] = useState([]);
    const[cart, setCard] = useState ([])
    const[agregado, setAgregado] = useState(false)

    function addCart (producto){
        setCard ([...cart, producto])
        setAgregado(true)
    }

    useEffect(() => {
        const misProductos = new Promise((resolve) =>{
            resolve(productosJson);
            setListProducts(misProductos);
        })
        console.log(misProductos)
        }, []);
  
    return (
        <CartContext.Provider value={{listProducts, setListProducts, addCart, agregado}}>
            {children}
        </CartContext.Provider>
    )
}