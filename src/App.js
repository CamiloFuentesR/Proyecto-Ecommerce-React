import './App.css';
import { probandoEnConsola } from './utils/generales';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { ButtonComponent } from "./components/ItemCount"
import { HomeContainer } from "./containers/HomeContainer";
import { ItemListContainer } from "./components/ItemListContainer";
import { BrowserRouter, Switch, Route} from "react-router-dom";

function App() {
  probandoEnConsola(`Funcionando el mensaje en consola`);
  return (
    <BrowserRouter>
        <HomeContainer greeting = {"Envío un greeting desde Chile!!"}/>
      <Switch>
        <Route exact path={`/`}>
            <ItemListContainer/>
        </Route>
        <Route path={`/detalle/:zapatilla-Mujer`}>
          <div className="App">
            <ButtonComponent />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;