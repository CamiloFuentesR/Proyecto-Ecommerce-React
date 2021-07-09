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

// clase eventos

// import React from 'react';
// import './style.css';
// import { ProgressComponent } from './ProgressComponent';

// export default function App() {
//   const[play,setPlay]=useState(0)
//   const[stop,setStop]=useState(0)
//   const[reset,setReset]=useState(0)


//   return (
//     <div>
//       <ProgressComponent opciones={"play":play,"stop":stop,"reset":reset}/>

//       <button onClick={setPlay(1)}>Play</button>
//       <button onClick={setStop(1)}>Stop</button>
//       <button onClick={setReset(1)}>Reset</button>
//     </div>
//   );