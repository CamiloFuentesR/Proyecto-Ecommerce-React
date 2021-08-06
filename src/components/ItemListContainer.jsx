import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ItemList } from '../components/ItemList';
import { db } from '../firebase/Firebase';
import { CartContext } from './CartContext';

export const ItemListContainer = () => {
    //aqui viene por defecto la query
    const { listProducts } = useContext(CartContext);
    const [product, setProduct] = useState([])
    const { id } = useParams();

    //para obtener la lista de productos basados en la category
    useEffect(() => {
        const productsByCategory = async () => {
            if (id !== undefined) {
                const response = await db.collection('Productos').where('categoryId', '==', id).get();
                setProduct(response.docs.map(response => ({ id: response.id, ...response.data() })))
            } else {
                const response = await db.collection('Productos').get();
                setProduct(response.docs.map(response => ({ id: response.id, ...response.data() })))
            }
        }
        productsByCategory();
    }, [id])
    return (
        <>
            {product.length > 0 ?
                <ItemList key={product.id} listProducts={product} /> :
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-info"></div>
                    <span className="sr-only">Loading...</span>
                </div>
            }
        </>
    )
}
