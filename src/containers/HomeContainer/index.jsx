import NavbarComponent from "../../components/NavbarComponent";

const ButtonComponent = () => {
    return(
        <div>
            <button> pulsar </button>
        </div>
    )
}

export const HomeContainer = ({greeting}) =>{
    const carrito = [];

    return (
        <div>
            <header>
                <NavbarComponent cart={carrito} boton= {ButtonComponent} greeting = {"Hola les envío un greeting desde Chile!!"}/>
            </header>
            <h1>{greeting}</h1>
        </div>
    )
}
