import logo from "./logoNavbar.png"
import "./style.scss";
import { CartWidget } from "../CartWidget";

const NavbarComponent = () => {
    return (
        <div className= "container">
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <img src={logo} alt="logo"/>
                <span className="navbar-brand" >Cursos Online Front End</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <span className="nav-item nav-link active" >Home <span className="sr-only"></span></span>
                        <span className="nav-item nav-link" >Lenguajes</span>
                        <span className="nav-item nav-link" >Frameworks</span>
                        <CartWidget />
                    </div>
                </div>
            </nav>
        </div>   
    )
};

export default NavbarComponent;