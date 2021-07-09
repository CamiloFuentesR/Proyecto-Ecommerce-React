import { ItemDetail } from "../ItemDetail"
import { useEffect, useState } from "react"


// const productosJson = [{
//     id: 1,
//     name: "Zapatilla",
//     price: "30.000",
//     image: "zapatilla.jpeg",
//     description: "Pitillo",
//     categoryId: "zapatilla-mujer",
//   },{
//     id: 2,
//     name: "Mochila",
//     price: "15.000",
//     image: "mochila.jpeg",
//     description: "Notebook",
//     categoryId: "Mochila",
//   },{
//     id: 3,
//     name: "Polerón",
//     price: "20.000",
//     image: "poleron.webp",
//     description: "Freestyle",
//     categoryId: "poleron",
//   }
//   ]

export const ItemDetailContainer = () => {
    const[productosMock, setProductosMock] = useState([]);

    useEffect(() => {
        async function productos(){
            const response = await fetch(`https://api.mercadolibre.com/sites/MLC/search?q=poleron`);
            const data = await response.json();
            setProductosMock (data.results[0]);
        }
        setTimeout(() =>{
        },2000);

        productos()
    }, [])
    console.log(productosMock)
    
    return(
        <ItemDetail key={productosMock.id} nombre={productosMock.name} precio={productosMock.price} imagen={productosMock.thumbnail} titulo={productosMock.title}/>
        )
    } 
