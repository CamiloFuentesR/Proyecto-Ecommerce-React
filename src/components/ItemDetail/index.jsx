

export const ItemDetail = ({ id, name, price, image, description, categoryId }) =>{
    return(
        <div>{categoryId}
            <img className={id} src={image} alt="zapatilla"/>
            <h3>{name}</h3>
            <h6>{description}</h6>
            <p className="precio">{price}</p>
            <b>Sólo 5 unidades disponibles</b>
        </div>
    )
}