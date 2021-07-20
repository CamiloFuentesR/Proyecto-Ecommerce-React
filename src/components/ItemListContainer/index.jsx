import React, { useEffect, useState } from 'react'
import { ItemList } from '../ItemList';
import { useParams } from 'react-router-dom';
import { productosJson } from "../../FirebaseMock"


export const ItemListContainer = () => {
    const[productosMock, setProductsMock] = useState([]);
    const { id } = useParams();

        // async function productos(){
        //     const response = await fetch(`https://api.mercadolibre.com/sites/MLC/search?q=tecnologia`);
        //     const data = await response.json();
        //     setProductosMock (data.results[5]);
        // }
        // setTimeout(() =>{
        //     productos()
        // },1000);

    useEffect(() => {
        const misProductos = new Promise((resolve) =>{
            resolve(productosJson)
        })

        if(id){
            misProductos.then(data => {
            const category = data.filter(element => element.categoryId === id)
            setProductsMock(category)
            })
        }else {
            misProductos.then(data => {
              setProductsMock(data);
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
        {productosMock.length > 0 ? 
        <ItemList key={ItemList.id} productos={productosMock}/> : <h2>Loading...</h2>
        } 
        </>
    )
}
