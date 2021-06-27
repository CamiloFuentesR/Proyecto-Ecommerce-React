import logo from "./logoNavbar.png"
import "./style.scss";

const NavbarComponent = ({ cart }) => {
    return (
        <div className= "container">
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <img src={logo} alt="logo"/>
                <a className="navbar-brand" >Cursos Online Front End</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" >Home <span className="sr-only"></span></a>
                        <a className="nav-item nav-link" >Lenguajes</a>
                        <a className="nav-item nav-link" >Frameworks</a>
                        <a className="nav-item nav-link disabled" >Carrito - {cart.length}</a>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default NavbarComponent;