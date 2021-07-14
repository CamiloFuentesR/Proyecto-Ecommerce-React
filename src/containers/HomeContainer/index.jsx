import NavbarComponent from "../../components/NavbarComponent";
import "./style.scss";

export const HomeContainer = ({greeting}) =>{

    return (
        <div>
            <header>
                <NavbarComponent />
            </header>
            <h1>{greeting}</h1>
        </div>
    )
}
