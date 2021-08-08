import React from 'react'

export const CarritoScreen = () => {

    const carrito = JSON.parse(localStorage.getItem('carrito'));
    console.log(carrito);
    return (
        <div className="container-fluid">
            <div className="container">
                <h1>carrito</h1>
                {
                    carrito ?
                    carrito.map(c => (
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
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))
                    :
                    <h2>Carrito vacio</h2>
                }
            </div>
        </div>
    )
}
