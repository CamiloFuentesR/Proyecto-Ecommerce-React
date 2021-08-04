import { ItemDetail } from "./ItemDetail"
import { useContext, useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import { CartContext } from "./CartContext";


export const ItemDetailContainer = () => {
  const[productos, setProductos] = useState();

  const { listProducts } = useContext(CartContext)
  const {id} = useParams();

  useEffect(() => {
    const misProductos = new Promise((resolve) =>{
      setTimeout(function (){
        const category = listProducts.find(element => element.id === parseInt(id))
        resolve(category)
      }, 2000)
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
      : <div className="d-flex justify-content-center">
          <div class="spinner-border text-info"></div>
          <span className="sr-only">Cargando...</span>
      </div>}
      </>
      )
  }