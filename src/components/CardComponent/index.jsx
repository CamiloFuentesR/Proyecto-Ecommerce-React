import "./style.scss";
import { saludoBotonAgregar } from '../../utils/generales';

export function CardComponent(){
    return (
            <div className="card">
                <h2>Javascript</h2>
                <h4>JavaScript es un lenguaje de programación o de secuencias de comandos que te permite implementar funciones complejas en páginas web...</h4>
                <p>$9.990 CLP</p>
                <button onClick= {() => {saludoBotonAgregar(alert(`Agregamos al Carrito?`))}}>Agregar al Carrito</button>
            </div>
    )
}
