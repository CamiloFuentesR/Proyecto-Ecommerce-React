import React, { useEffect, useState, useContext } from 'react'
import { ItemList } from '../ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore } from "../../Firebase"
import { CartContext } from '../../Context/CartContext';



export const ItemListContainer = () => {
    const { id } = useParams();

    const [ categoryProd, setCategoryProd ] = useState([])

    const { listProducts } = useContext(CartContext)

    useEffect(() => {
        if(id){
            const DB = getFirestore(); 
            const COLLECTION = DB.collection('Productos');
            const Categoria = COLLECTION.where('categoryId', '==', id).get();
            Categoria.then((response) => {
                setCategoryProd(response.docs.map(element => ({id: element.id, ...element.data()})))
            })
        }else{
            console.log("algo salio mal")
            setCategoryProd(listProducts)
        }
    }, [id, listProducts])
    
    console.log(listProducts)
    console.log(id)
    return(
        <>
        {categoryProd.length > 0 ?
        <ItemList key={ItemList.id} productos={listProducts}/> : <h2>Loading...</h2>
        }
        </>
    )
}
