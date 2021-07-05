import React, {useState, useEffect} from 'react'
import { ItemList } from '../ItemList';
import { Item } from '../Item';


export const ItemListContainer = () => {
    const[listProducts, setListProducts] = useState([]);

    useEffect(() => {
        async function getDataMl(){
            const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=zapatillasmujer`);
            const data = await response.json();
            setListProducts (data.results);
        }
        getDataMl();
    }, [])
    console.log(listProducts);

    return(
            <ItemList key={Item.id} listProducts={listProducts}/>
    )
}