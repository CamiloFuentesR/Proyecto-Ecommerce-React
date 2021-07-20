import { ItemDetail } from "../ItemDetail"
import { useContext, useEffect, useState } from "react"
import { Link, useParams } from 'react-router-dom';
import { productosJson } from "../../FirebaseMock"
import { CartContext } from "../../Context/CartContext";


export const ItemDetailContainer = () => {
  const[productosMock, setProductosMock] = useState();
  const {id} = useParams();

  const { addCart } = useContext(CartContext)
  const { agregado } = useContext(CartContext)
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
      }, 2000)
    })    
    misProductos.then(resolve => setProductosMock(resolve))
    console.log(id)

      // async function productos(){
      //     const response = await fetch(`https://api.mercadolibre.com/sites/MLC/search?q=tecnologia`);
      //     const data = await response.json();
      //     setProductosMock (data.results[5]);
      // }
      // setTimeout(() =>{
      //     productos()
      // },1000);

  }, [id])
  console.log(productosMock)
  
  return(
      <> 
      {productosMock ?
      <ItemDetail 
      key={productosMock.id} 
      stock={productosMock.availableStock} 
      precio={productosMock.price} 
      imagen={productosMock.image} 
      descripcion={productosMock.description} 
      addCart={addCart} />
      : <p>Cargando...</p>}
      <Link to="/cart">{agregado ? <div class="alert alert-success" role="alert">
        <button class="btn btn-succes" show="1000">Well done! Compra Terminada</button></div> : false} </Link>
      </>
      )
  }