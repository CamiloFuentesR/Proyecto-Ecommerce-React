import {createContext} from 'react'


export const CartContext = createContext();

export const CartProvider = () => {
    // const [listProducts, setListProducts]= useState([]);
    // useEffect(() => {
    //   async function getData(){
    //     const response = await fetch(`https://api.mercadolibre.com/sites/MLC/search?q=tecnologia`);
    //     const data = await response.json();
    //     setListProducts(data);
    //   }
    //   getData();
    // }, []);
  
    return <CartContext.Provider>

    </CartContext.Provider>
}