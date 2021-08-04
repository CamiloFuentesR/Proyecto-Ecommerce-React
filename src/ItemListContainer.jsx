import React, { useEffect, useState } from 'react'
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import { LoadProducts } from './LoadProducts';



export const ItemListContainer = () => {

    const [ category, setCategory ] = useState([])
    const { id } = useParams();
    console.log(id)


    useEffect(() => {
        const resultado = async () => {
            setCategory(await LoadProducts(id));
        }
        resultado ();
    }, [id])


    return(
        <>
        {category.length > 0 ?
        <ItemList key={ItemList.id} category={category}/> : 
        <div className="d-flex justify-content-center">
            <div class="spinner-border text-info"></div>
            <span className="sr-only">Loading...</span>
        </div>
        }        
        </>
    )
}
