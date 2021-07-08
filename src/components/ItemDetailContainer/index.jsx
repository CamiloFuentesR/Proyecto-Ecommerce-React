import { ItemDetail } from "../ItemDetail"
import { useEffect, useState } from "react"


const productosJson = [{
    id: 1,
    name: "Zapatilla",
    price: "30.000",
    image: "zapatilla.jpeg",
    description: "Pitillo",
    categoryId: "zapatilla-mujer",
  },{
    id: 2,
    name: "Mochila",
    price: "15.000",
    image: "mochila.jpeg",
    description: "Notebook",
    categoryId: "Mochila",
  },{
    id: 3,
    name: "Polerón",
    price: "20.000",
    image: "poleron.webp",
    description: "Freestyle",
    categoryId: "poleron",
  }
  ]

export const ItemDetailContainer = () => {
    const[productosMock, setProductosMock] = useState();

    useEffect(() => {
        function productos(){
             fetch(productosJson).then(response => {
                return response.json();
            }).then (data => {
                console.log(data.results);
                setProductosMock(data);
            }).catch(error => {
                console.log(error);
            }).finally(() => {
                console.log(`productos mockeados`);
            })
        }
        setTimeout(() =>{
        },2000);

        productos()
    }, [])
    console.log(productosMock)
    
    return(
        <ItemDetail key={ItemDetailContainer.id} nombre={productosJson.name} precio={productosJson.price} imagen={productosJson.image} descripcion={productosJson.description} categoria={productosJson.categoryId}/>
        )
    } 
