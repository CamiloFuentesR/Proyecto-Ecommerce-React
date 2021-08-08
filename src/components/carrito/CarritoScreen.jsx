import React, { useEffect, useState } from 'react'

export const CarritoScreen = () => {

    const [carro, setCarro] = useState('')
    let res = 0;
    if (carro) {
        for (let name in carro) {
            res = Number(res) + Number(carro[name].price * carro[name].cantidad);
        }
    }

    const eliminarDelCarrito = (id,e) => {
        setCarro(carro.filter(carro => carro.id !== id));
        localStorage.setItem('carrito',JSON.stringify(carro));
    }

    useEffect(() => {
        let carrito = JSON.parse(localStorage.getItem('carrito'));
        setCarro(carrito);
    }, [])
    return (
        <div className="container-fluid">
            <div className="container">
                <h1>carrito</h1>
                {
                    carro ?
                        carro.map(c => (

                            <div key={c.id}>
                                <div className="container">
                                    <div className="card mb-3" style={{ minWidth: '740px' }}>
                                        <div className="row">
                                            <div className="col-md-5">
                                                <img src={c.image} className="imagen img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-md-7">
                                                <div className="card-body">
                                                    <h5 className="card-title">{c.name}</h5>
                                                    <p className="card-text">{c.description}</p>
                                                    <p className="card-text">Cantidad: {c.cantidad}</p>
                                                    <p className="card-text">Precio Total: {c.price * c.cantidad}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <button 
                                            className="btn btn-danger"
                                            onClick={(e)=>eliminarDelCarrito(c.id,e)}
                                        >
                                            eliminar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                        :
                        <h2>Carrito vacio</h2>
                }
                <div className="container text-center mb-5 mt-4">Total a pagar : {res}</div>
            </div>
        </div>
    )
}
