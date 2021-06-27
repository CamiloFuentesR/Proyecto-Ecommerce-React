import './App.css';
import { probandoEnConsola } from './utils/generales';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Contador } from "./components/ContadorComponent";
import { HomeContainer } from "./containers/HomeContainer";
import { ItemListContainer } from "./components/ItemListContainer";

function App() {
  probandoEnConsola(`Funcionando el mensaje en consola`);
  return (
    <div className="App">
      <HomeContainer/>
      <ItemListContainer greeting = {"Hola les envío un greeting desde Chile!!"}/>
      <Contador />
    </div>
  );
}

export default App;