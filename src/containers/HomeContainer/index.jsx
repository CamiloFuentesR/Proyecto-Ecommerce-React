import NavbarComponent from "../../components/NavbarComponent";
import "./style.scss";

export const HomeContainer = ({greeting}) =>{
    const carrito = [];

    return (
        <div>
            <header>
                <NavbarComponent cart={carrito} />
            </header>
            <h1>{greeting}</h1>
        </div>
    )
}
