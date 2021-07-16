import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { HomeContainer } from "./containers/HomeContainer";
import { ItemListContainer } from "./components/ItemListContainer";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Cart } from "./components/Cart"
import { CartContext } from "./Context/shopContext"


function App() {

  return (
    <BrowserRouter>
        <HomeContainer greeting = {"Envío un greeting desde Chile!!"}/>
        <Switch>
          <CartContext.Provider>
            <Route exact path={`/`}>
                <ItemListContainer/>
            </Route>

            <Route exact path={`/detalle/:id`}>
            <ItemDetailContainer />
            </Route>

            <Route exact path={`/detalle`}>
            <ItemDetailContainer />
            </Route>

            <Route exact path={`/cart`}>
             <Cart />
            </Route>
          </CartContext.Provider>
        </Switch>
    </BrowserRouter>
  );
}

export default App;