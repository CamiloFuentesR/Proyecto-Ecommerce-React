
// AFTER ACO
// import React, {useEffect, useState} from 'react'
// import './App.css';

import { useEffect } from "react"
import { getFirestore } from "../Firebase"
import { productosJson } from "../FirebaseMock"

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


 /** PARA TOMAR TODOS LOS DATOS CON ASYNC Y AWAIT DE LA COLLECCION DE FIRESTORE
  *     async function getDataFromFirestore (){ 
             const DB = getFirestore(); // Contectando a la BD 
             const COLLECTION = DB.collection('Productos'); // Tomando la coleccion de productos que es un array
             const response = await COLLECTION.get(); // si colocas WHERE puedes traer un filtro EJ: await COLLECTION.where(`stock`, `>`, 50).get() se pueden anidar where tambien
             setListProducts(response.docs.map(element => element.data())); // docs es un array de documentos (productos)
             // el data es para traer todos los datos como objetos
         }
         getDataFromFirestore();
         console.log(getDataFromFirestore);
 
  */

/**
 * 
 TOMAR LOS DATOS CON PROMESAS
    useEffect(() => {
        const DB = getFirestore(); // Contectando a la BD 
        const COLLECTION = DB.collection('Productos'); // Tomando la coleccion de productos
        COLLECTION.get().then(( response ) => {
            console.log(response.docs)
            response.docs.forEach((documento) => {
                console.log(documento.data());
            });
        })
    }, [])
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
/**
 * El BATCH es para actualizar la base de datos cambiando valores y productos ++++++++++++++
 * 
 const DB = getFirestore();
 const Batch = DB.batch();
 
 Batch.update(DB.collection(`pedido`).doc(`acá va id pedido`), {total: 9999}) // total modifica el precio
 Batch.update(DB.collection(`pedido`).doc(`acá va  otro id pedido`), {total: 9999})
 Batch.commit();
 */
 
/**
 SI EL CARTCONTENT tiene mis productosJson, se puede hacer una modificacion masiva a mi colleccion
 * 
 cartContent.forEach(element => {
   Batch.update(DB.collection(`Productos`).doc(element.id), {stock: element.stock - element.availableQuantity...etc})
 })
 Batch.commit();
 */


/**
 PARA AGREGAR DOCUMENTOS A LA COLLECCION
 * 
const productos = [{ id: 3, name: `nombre`, price: 40000}, { id: 4, name: `nombre`, price: 40000}]
productos.forEach(element => {
  DB.collection(`productos`).add(element);
})
 *
 *
 PARA AGREGAR MENOS DE 100 PRODUCTOS A LA COLLECCION
 *
 const productos = [{ id: 3, name: `nombre`, price: 40000}, { id: 4, name: `nombre`, price: 40000}]
 for(let i=0; i < 100; i ++){
    DB.collection(`Productos`).add(productos[0]).then((response) => {
      console.log(response)
    })
 }
 */


 /**
  * PARA CREAR PRODUCTOS DESDE CODIGO A FIREBASE DINAMICO (HACERLO DENTRO DE UN USE EFFECT Y LUEGO BORRAR PARA QUE NO SE SIGA EJECUTANDO)
  const DB = getFirestoreDB();
  Array (10).fill(true).forEach((element, index) => {
    const producto = {id:index, title: `Zapatillas modelo ${index}`, category: `Zapatillas - ${index}`, img: `url de imagen`}
    DB.collection("productos").add(producto)
  }
  )
  */

  /**
   * PARA TRAER LOS DATOS DE FIREBASE DE FORMA ORDENADA, ASCENDENTE O DESCENDENTE
   async function getData(){
     const DB = getFirestore();
     const response = await DB.collection(`Productos`).orderBy(`id`, `desc`).get() //desc = descendente : asc = ascendente
     response.docs.map((producto) => {
       console.log(producto.data());
      })
    }
    getData();
  */


/**
 * PARA TRAER DATOS SEGUN PARAMETROS; SE PUEDE USAR EL WHERE, PARA TRAER POR EJEMPLO POR ID Y MENOR A 5
 * 
 * async function getData(){
     const DB = getFirestore();
     const response = await DB.collection(`Productos`).where(`id`, `>=`, 5).get() 
     response.docs.map((producto) => {
       console.log(producto.data());
      })
    }
    getData();
 */