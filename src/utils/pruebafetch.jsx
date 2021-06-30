// import { getDefaultNormalizer } from "@testing-library/react";
// import { useEffect, useState } from "react";

// export const Contador = ({stock, initial, onAdd}) => {
//     const [contador, setContador] = useState(0);
//     const [productos, setProductos] = useState([])

//     useEffect(() => {
//         async function getDataMl(){
//             const response = await fetch(`https://api.mercadolibre.com/site/MLA/search?q=zapatillas`);
//             const data = await response.json();
//             setProductos (data.results);
//             // fetch(`https://api.mercadolibre.com/site/MLA/search?q=zapatillas`).then(repsonse => {
//             //     return response.json();
//             // }).then (values => {
//             //     console.log(values);
//             //     console.log(data.results[0].title);
//             //     setProductos(data);
//             //     generarNuevasCards(data);
//             // }).catch(error => {
//             //     console.log(error);
//             // }).finally(() => {
//             //     console.log(`se terminó la request`);
//             // })

//             // const data = await response.json();
//             // setProductos(data);
//             // setContador(5);
//             // console.log(`Estoy creada`)
//         }
//         getDataMl();

//     }, []);


//     console.log(productos);
//     return (
//         <div className="itemCount">
//             {productos.length > 0 ? productos[0].price : `loading`}
//             <button className="btn btn-info" onClick={() => {setContador(contador-1)}}>-</button>
//             {contador +1}
//             <button className="btn btn-info" onClick={() => {setContador(contador+1)}}>+</button>
//         </div>
//     )
// }

// export const Card = () => {
//     return(
//         <div className="card" style="width: 18rem;">
//                 <img className="card-img-top" src="..." alt="Card image cap"></img>
//             <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a class="btn btn-primary">Go somewhere</a>
//             </div>
//         </div>
//     )

// }