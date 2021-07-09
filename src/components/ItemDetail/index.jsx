import "./style.scss";


export const ItemDetail = ({ name, price, thumbnail, title }) =>{
    return(
        <div className="cardItemDetail">
               <img className="card-img-top" src={thumbnail} alt="Card image cap"></img>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{name}</p>
                <a className="btn btn-primary">{price}</a>
           </div>
        </div>

    )
}