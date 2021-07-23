import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { HomeContainer } from "./containers/HomeContainer";
import { ItemListContainer } from "./components/ItemListContainer";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { CartContainer } from "./components/Cart"
import { CartProvider} from "./Context/CartContext"



function App() {

  return (
  <CartProvider>
    <BrowserRouter>
        <HomeContainer greeting = {"Envío un greeting desde Chile!!"}/>
        <Switch>
            <Route exact path={`/`}>
                <ItemListContainer/>
            </Route>

            <Route exact path={`/detalle/:id`}>
              <ItemDetailContainer />
            </Route>

            <Route exact path={`/cart`}>
              <CartContainer />
            </Route>
            
        </Switch>
    </BrowserRouter>
  </CartProvider>
  );
}

export default App;