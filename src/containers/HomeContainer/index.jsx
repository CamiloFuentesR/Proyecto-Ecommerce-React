import NavbarComponent from "../../components/NavbarComponent/index";

export const HomeContainer = () =>{
    const carrito = [];
    return (
        <div>
            <header>
                <NavbarComponent cart={carrito}/>
            </header>
        </div>
    )
}
