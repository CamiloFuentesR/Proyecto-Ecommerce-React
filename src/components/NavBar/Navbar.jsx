export function NavBar() {
    return (
        <div className= "container">
            <nav class="navbar navbar-expand-md navbar-light bg-light">
                <img src="./imagen_bandera.png" alt="logo" />
                <a class="navbar-brand" href="#">Cursos Online Front End</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link active" href="#">Home <span class="sr-only"></span></a>
                        <a class="nav-item nav-link" href="#">Lenguajes</a>
                        <a class="nav-item nav-link" href="#">Frameworks</a>
                        <a class="nav-item nav-link disabled" href="#">Empaquetadores</a>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default NavBar