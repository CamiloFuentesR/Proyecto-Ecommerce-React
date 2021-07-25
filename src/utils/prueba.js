
// AFTER ACO
// import React, {useEffect, useState} from 'react'
// import './App.css';

// function App() {
//     const url = 'https://jsonplaceholder.typicode.com/todos'
//     const [todos, setTodos] = useState()
//     const fetchApi = async () => {
//         const response = await fetch (url)
//         console.log(response.statusText)
//         const responseJSON = await response.json()
//         setTodos(responseJSON)
//     }
//     useEffect(() =>{
//         fetchApi()
//     }, [])
//     return (
//         <div>
//             <h1>Lista de tareas</h1>
//             <ul>{ !todos ? 'Cargando ...' :todos.map( (todo, index) =>{
//                 return<li>{todo.title} {todo.completed ? '✔️' : '❌'}</li>
//             })}
//             </ul>
//         </div>   
//     )}
    
//     export default App



/**  CLASE EVENTOS

import React from 'react';
import './style.css';
import { ProgressComponent } from './ProgressComponent';

export default function App() {
  const[play,setPlay]=useState(0)
  const[stop,setStop]=useState(0)
  const[reset,setReset]=useState(0)


  return (
    <div>
      <ProgressComponent opciones={"play":play,"stop":stop,"reset":reset}/>

      <button onClick={setPlay(1)}>Play</button>
      <button onClick={setStop(1)}>Stop</button>
      <button onClick={setReset(1)}>Reset</button>
    </div>
  );
  */

  
 /** PARA TOMAR TODOS LOS DATOS DE LA COLLECCION DE FIRESTORE
  *         async function getDataFromFirestore (){ 
             const DB = getFirestore(); // Contectando a la BD 
             const COLLECTION = DB.collection('Productos'); // Tomando la coleccion de productos que es un array
             const response = await COLLECTION.get(); // si colocas WHERE puedes traer un filtro EJ: await COLLECTION.where(`stock`, `>`, 50).get() se pueden anidar where tambien
             setListProducts(response.docs.map(element => element.data())); // docs es un array de documentos (productos)
             // el data es para traer todos los datos como objetos
         }
         getDataFromFirestore();
         console.log(getDataFromFirestore);
 
  */

  /** PARA TOMAR DATOS DE FIRESTORE POR ID
   *     useEffect(() => {
        async function getDataFromFirestore (){ 
            const DB = getFirestore(); // Contectando a la BD 
            const COLLECTION = DB.collection('Productos'); // Tomando la coleccion de productos que es un array
            const response = await COLLECTION.get();
            const aux = response.docs.map(element => {
                return {id: element.id, ...element.data()}
            });
            setListProducts(aux)
            // docs es un array de documentos (productos)
            // el data es para traer todos los datos como objetos
        }
        getDataFromFirestore();
   */

/** PARA TOMAR DATOS DE FIRESTORE POR DOCUMENTO Y ID DE FIREBASE AUTOMÁTICO
 *      async function getDataFromFirestoreUnit (){ // Tomando un solo documento de la DB con el id
            const DB = getFirestore();
            const DOCUMENT = DB.collection('Productos').doc("02Xr7NfmGqGYbOMBF4cd"); // Esto hay que hacerlo dinámico con props, estados o parámetros
            const response = await DOCUMENT.get();
            console.log(response.data());
            setProductUnit(response.data());
        }
        getDataFromFirestoreUnit()
 */


