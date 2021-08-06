import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/itemDetailContainer";
import { CartProvider } from "./components/CartContext"
import { ItemListContainer } from './components/ItemListContainer';
import { CartContainer } from './components/Cart';
import Navbar from './components/Navbar';



function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path={`/`}>
            <ItemListContainer />
          </Route>
          <Route exact path={`/category/:id`}>
            <ItemListContainer />
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
