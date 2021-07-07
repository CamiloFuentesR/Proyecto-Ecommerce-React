import { ItemDetail } from "../ItemDetail"
import { useEffect, useState } from "react"


const productosMock = [{
    id: 1,
    name: "Zapatilla",
    price: "30.000",
    image: img1,
    description: "Pitillo",
    categoryId: "zapatilla-mujer",
  },{
    id: 2,
    name: "Mochila",
    price: "15.000",
    image: img2,
    description: "Notebook",
    categoryId: "Mochila",
  },{
    id: 3,
    name: "Polerón",
    price: "20.000",
    image: img3,
    description: "Freestyle",
    categoryId: "poleron",
  }
  ]

export const ItemDetailContainer = () => {
    const[productosMock, setProductosMock] = useState();

    useEffect(() => {
        function productos(){
             fetch(productosMock).then(response => {
                return response.json();
            }).then (data => {
                console.log(data);
                console.log(data.results[0].description);
                setProductosMock(data);
            }).catch(error => {
                console.log(error);
            }).finally(() => {
                console.log(`productos mockeados`);
            })
        }
        setTimeout(() =>{
            setProductosMock
        },2000);

        productos()
    }, [])
    console.log(setProductosMock)
    
    return(
        <ItemDetail key={ItemDetailContainer.id} nombre={productosMock.name} precio={productosMock.price} imagen={productosMock.image} descripcion={productosMock.description} categoria={productosMock.categoryId}/>
        )
    } 
