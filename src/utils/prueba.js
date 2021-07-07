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