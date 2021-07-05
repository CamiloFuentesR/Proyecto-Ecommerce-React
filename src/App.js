import './App.css';
import { probandoEnConsola } from './utils/generales';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { ButtonComponent } from "./components/ItemCount"
import { HomeContainer } from "./containers/HomeContainer";
import { ItemListContainer } from "./components/ItemListContainer";

function App() {
  probandoEnConsola(`Funcionando el mensaje en consola`);
  return (
    <div className="App">
      <HomeContainer greeting = {"Envío un greeting desde Chile!!"}/>
      <ItemListContainer/>
      <ButtonComponent />
    </div>
  );
}

export default App;