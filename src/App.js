import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { HomeContainer } from "./containers/HomeContainer";
import { ItemListContainer } from "./components/ItemListContainer";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer"

function App() {
  return (
    <BrowserRouter>
        <HomeContainer greeting = {"Envío un greeting desde Chile!!"}/>
      <Switch>

        <Route exact path={`/`}>
          <ItemListContainer/>
        </Route>

        <Route exact path={`/detalle`}>
          <ItemDetailContainer />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;