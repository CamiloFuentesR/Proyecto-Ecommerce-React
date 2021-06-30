import logo from "./logoNavbar.png"
import "./style.scss";

const NavbarComponent = ({ cart}) => {
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
                        <span className="nav-item nav-link disabled" >Carrito - {cart.length}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                        </svg>
                        <span className="badge badge-dark" id="numero-carrito">0</span>
                    </div>
                </div>
            </nav>
        </div>   
    )
};

export default NavbarComponent;