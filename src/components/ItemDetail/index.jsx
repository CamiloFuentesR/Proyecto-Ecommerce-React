import "./style.scss";


export const ItemDetail = ({ categoria, precio, imagen, titulo }) =>{
    return(
        <div className="cardItemDetail">
               <img className="card-img-top" src={imagen} alt="imagen"></img>
            <div className="card-body">
                <h3 className="card-title">{titulo}</h3>
                <h6 className="card-text">Cantidades Vendidas: {categoria}</h6>
                <p className="priceItem">${precio}</p>
                <button className="btn btn-danger">Agregar al Carrito</button>
           </div>
        </div>

    )
}