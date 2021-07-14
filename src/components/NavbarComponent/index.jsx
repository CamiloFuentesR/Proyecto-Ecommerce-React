import logo from "./logoNavbar.png"
import "./style.scss";
import { CartWidget } from "../CartWidget";
import { Link } from "react-router-dom"

const NavbarComponent = () => {
    return (
        <div className= "container">
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <Link to={"/"}> <img src={logo} alt="logo"/></Link>
                <span className="navbar-brand" >Cursos Online Front End</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to={"/"}><span className="nav-item nav-link active" >Home <span className="sr-only"></span></span></Link>
                        <Link to={"/category"}><span className="nav-item nav-link" >Zapatillas</span></Link>
                        <span className="nav-item nav-link" >Mochilas </span>
                        <span className="nav-item nav-link" >Poleron </span>
                        <Link to={"/cart"}> <CartWidget /></Link>
                    </div>
                </div>
            </nav>
        </div>   
    )
};

export default NavbarComponent;