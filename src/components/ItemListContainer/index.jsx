import React, { useEffect, useState } from 'react'
import { ItemList } from '../ItemList';
import { useParams } from 'react-router-dom';
import { productosJson } from "../../FirebaseMock"


export const ItemListContainer = () => {
    const[productosMock, setProductsMock] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const misProductos = new Promise((resolve) =>{
            resolve(productosJson)
        })

        if(id){
            misProductos.then(data => {
            const categoryId = data.filter(element => element.categoryId === id)
            setProductsMock(categoryId)
        })
    }else {
        misProductos.then(({data})=> {
            setProductsMock({data});
        })
    }
}, [id])
console.log(productosMock)

    return(
        <>
        {productosMock.length > 0 ? 
        <ItemList key={ItemList.id} productos={productosMock}/> : <h2>Loading...</h2>
        } 
        </>
    )
}
