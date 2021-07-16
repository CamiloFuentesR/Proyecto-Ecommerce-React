import { ItemDetail } from "../ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import imagen1 from "../ItemListContainer/ZapatillasBlanca.jpg"
import imagen2 from "../ItemListContainer/ZapatillasNegro.jpg"
import imagen3 from "../ItemListContainer/PoleronRosado.jpg"
import imagen4 from "../ItemListContainer/PoleronNegro.jpg"
import imagen5 from "../ItemListContainer/MochilaMinnie.jpg"
import imagen6 from "../ItemListContainer/MochilaUnisex.jpg"
import imagen7 from "../ItemListContainer/MochilaUnisexRosado.jpg"
import imagen8 from "../ItemListContainer/MochilaUniverso.jpg"
import { Link } from "react-router-dom"



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

export const ItemDetailContainer = () => {
    const[productosMock, setProductosMock] = useState();
    const {id} = useParams();
    const[cart, setCard] = useState ([])
    const[agregado, setAgregado] = useState(false)

    function addCart (producto){
        //validar stock aquí
        setCard ([...cart, producto])
        setAgregado(true)
    }

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
        <ItemDetail key={productosMock.id} stock={productosMock.availableStock} precio={productosMock.price} imagen={productosMock.image} descripcion={productosMock.description} addCart={addCart} />
        : <p>Cargando...</p>}
        <Link to="/cart">{agregado ? <div class="alert alert-success" role="alert">
          <button class="btn btn-succes" show="1000">Well done! Compra Terminada</button></div> : false} </Link>
        </>
        )
    }
