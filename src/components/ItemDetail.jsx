import { useEffect, useState } from "react";
import "../style/ItemDetail.scss";

export const ItemDetail = ({ producto, id }) => {

    const { image, stock, description, price, availableStock } = producto;
    const [carrito, setCarrito] = useState([]);
    const [carrito2, setCarrito2] = useState('');
    const [count, setCount] = useState(1);
    const restar = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    const add = () => {
        if (count <= availableStock) {
            setCount(count + 1);
        }
    }
    useEffect(() => {
        const carrito = JSON.parse(localStorage.getItem('carrito'));
        setCarrito(carrito);
        let newProduct;
        if (carrito2 !== '' && carrito) {
            newProduct = carrito.some(carrito => carrito.id === id)
        }
        if (!newProduct && carrito2 !== '') {
            localStorage.setItem('carrito', JSON.stringify(carrito2))
        }
    }, [carrito2,id])


    const AgregarAlCarrito = () => {
        if (carrito === null) {
            producto.cantidad = count;
            producto.id = id;
            localStorage.setItem('carrito', JSON.stringify([producto]));
        } else if (carrito) {
            producto.cantidad = count;
            producto.id = id;
            setCarrito2(
                [...carrito, producto]
            )
        }
    }


    return (
        <div className="cardItemDetail">
            <div className="cardDetail">
                <img className="card-img-top" src={image} alt="imagen"></img>
            </div>
            <div className="card-body">
                <h4 className="card-title">{description}</h4>
                <h6 className="card-text">Cantidades Disponibles: {stock}</h6>
                <p className="priceItem">${price}</p>
                <div className="itemCount">
                    <div>
                        <button className="btn btn-info" onClick={restar}>-</button>
                        <span className="numeroContador">{count}</span>
                        <button className="btn btn-info" onClick={add}>+</button>
                    </div>
                    <button
                        className="btn btn-success"
                        onClick={AgregarAlCarrito}
                    >
                        Agregar al Carrito
                    </button>
                    {/* {!open ? (
            <button className="btn btn-danger" onClick= {() => agregarYAbrir(id, counter)}>Agregar al Carrito</button>) :
            (<Link to={"/cart"}><button className="btn btn-success">Producto Agregado ✔️ Terminar Compra</button></Link>)} */}
                </div>
            </div>

        </div>
    )
}