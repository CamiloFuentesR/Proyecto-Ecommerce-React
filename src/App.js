import './App.css';
import { CardComponent } from './components/CardComponent';
import { probandoEnConsola } from './utils/generales';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/NavBar/Navbar";

function App() {
  probandoEnConsola(`Funcionando el mensaje en consola`);
  return (
    <div className="App">
      <NavBar />
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </div>
  );
}

export default App;
