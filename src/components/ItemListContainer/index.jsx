import "./style.scss";
import { CardComponent } from "../CardComponent"

export function ItemListContainer ({greeting}){
    return(
    <div className = "itemListContainer">
        <h2>{greeting}</h2>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
    </div>
    )
}

