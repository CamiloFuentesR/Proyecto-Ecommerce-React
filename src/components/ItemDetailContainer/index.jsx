import { ItemDetail } from "../ItemDetail"
import { useContext, useEffect, useState } from "react"
import { Link, useParams } from 'react-router-dom';
import { productosJson } from "../../FirebaseMock"
import { CartContext } from "../../Context/CartContext";


export const ItemDetailContainer = () => {
  const[productos, setProductos] = useState();
  const {id} = useParams();

  // const[cart, setCard] = useState ([])
  // const[agregado, setAgregado] = useState(false)

  // function addCart (producto){
  //     //validar stock aquí
  //     setCard ([...cart, producto])
  //     setAgregado(true)
  // }

  useEffect(() => {
    const misProductos = new Promise((resolve) =>{
      setTimeout(function (){
        const category = productosJson.find(element => element.id === parseInt(id))
        resolve(category)
      }, 1000)
    })    
    misProductos.then(resolve => setProductos(resolve))
    console.log(id)
  }, [id])
  console.log(productos)
  
  return(
      <> 
      {productos ?
      <ItemDetail 
      key={productos.id} 
      stock={productos.availableStock} 
      precio={productos.price} 
      imagen={productos.image} 
      descripcion={productos.description} 
      />
      : <p>Cargando...</p>}
      </>
      )
  }