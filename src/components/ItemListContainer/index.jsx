import "./style.scss";
import { CardComponent } from "../CardComponent"

export function ItemListContainer (){
    return(
    <div className = "itemListContainer">
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
    </div>
    )
}

