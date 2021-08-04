import { useState } from "react"
import { Link } from "react-router-dom";
import { getFirestore } from './Firebase';

export const CartContainer = () => {
    const [datos, setDatos] = useState({name: ``, email: ``, phone: ``});
    // const [total, setTotal] = useState(0)
    
    // const { cart } = useContext(CartContext)


    // useEffect(() => {
    //     const total = cart.reduce((previo, actual) => {return previo.montoTotal + actual.montoTotal}) //esta funcion tiene que estar en el context (indica el total de cada elemento que se agrega al carrito. Se puede hacer con for each ver video de la clase)
    //     setTotal(total)
    // })

    
    console.log(datos)
    return( 
        <>
        <Link to={`/`} ><button>Volver a página principal</button></Link>
        <div>
           <input type="text" placeholder= "Tu nombre" onInput={(event) => {
               setDatos({ ...datos, name: event.target.value})
            }} ></input>
            <input type="email" placeholder= "Tu Email" onInput={(event) => {
                setDatos({ ...datos, email: event.target.value})
            }} ></input>
            <input type="tel" id="phone" name="phone" pattern= "[0-9]{1}-[0-9]{4}-[0-9]{4}" required placeholder="0-0000-0000"onInput={(event) => {
                setDatos({ ...datos, phone: event.target.value})
            }} ></input>
        </div>
        <div>
        <button className="btn btn-success" onClick={() => {
                const pedido = { buyer: { ...datos } } // con esta línea se guarda los datos del comprador, el carrito y el total. De aquí a Mercado Pago
                //const pedido = { buyer: { ...datos }, items: cart, total: total } // con esta línea se guarda los datos del comprador, el carrito y el total. De aquí a Mercado Pago
                console.log(pedido)

                const DB = getFirestore();
                const PedidosCollection = DB.collection("Pedidos") // para agregar el pedido en Firebase
                // PedidosCollection.add(pedido);
                
                PedidosCollection.add(pedido).then(({id}) => { console.log(id)}) // para agregar el pedido con el id automático de firebase. Que despues es el nº de seguimiento
                // const DUCUMENT = PedidosCollection.doc(`acá va el id automático`) // para modificar o actualizar el nº de registro id
                // DOCUMENT.update({ buyer:{name: `Pauli` ,} , total: 0, }) // se puede modificar o actualizar cualquiera de estas propiedades.

                // const DUCUMENT = PedidosCollection.doc(`mPTPHN1z8wMb8Aa1K6GX`).delete() //Para borrar un pedido
                // const DUCUMENT = PedidosCollection.doc(`WPw024FJsjoyj7QKMEbr`).delete().then(() => {console con mensaje}).catch(error) => {console con mensaje que algo salio mal})// para eliminar un documento.
   
            }} >Terminar Compra</button>
        </div>
        </>
    )
}


/**
 // misma funcion de reduce pero con forEach
 * 
 useEffect(() => {

     let acumulador = 0;
     cartContent.forEach(element => {
         acumulador += element.totalAmount;
        })
        setTotal(acumulador);
    })
 */