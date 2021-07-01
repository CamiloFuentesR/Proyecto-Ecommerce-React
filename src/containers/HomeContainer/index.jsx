import NavbarComponent from "../../components/NavbarComponent";


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
