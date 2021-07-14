import React, {useState, useEffect} from 'react'
import { ItemList } from '../ItemList';
import { useParams } from 'react-router-dom';
import imagen1 from "./ZapatillasBlanca.jpg"
import imagen2 from "./ZapatillasNegro.jpg"
import imagen3 from "./PoleronRosado.jpg"
import imagen4 from "./PoleronNegro.jpg"
import imagen5 from "./MochilaMinnie.jpg"
import imagen6 from "./MochilaUnisex.jpg"
import imagen7 from "./MochilaUnisexRosado.jpg"
import imagen8 from "./MochilaUniverso.jpg"


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

export const ItemListContainer = () => {
    const[listProducts, setListProducts] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        const misProductos = new Promise((resolve) =>{
            resolve(productosJson)
        })

        if(id){
            misProductos.then(data => {
            const category = data.filter(element => element.categoryId === id)
            setListProducts(category)
            })
        }else {
            misProductos.then(data => {
                setListProducts(data);
            })
        }

        // async function getDataMl(){
        //     const response = await fetch(`https://api.mercadolibre.com/sites/MLC/search?q=tecnologia`);
        //     const data = await response.json();
        //     setListProducts (data.results);
        // }
        // getDataMl();
    }, [id])

    return(
        <>
        {listProducts.length > 0 ? 
        <ItemList key={ItemList.id} listProducts={listProducts}/> : <h2>Loading...</h2>
        } 
        </>
    )
}
