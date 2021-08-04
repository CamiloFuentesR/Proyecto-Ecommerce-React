import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import { ItemDetailContainer } from "./itemDetailContainer";
import { CartContainer } from "./Cart"
import { CartProvider} from "./CartContext"
import Navbar from './Navbar';
import { ItemListContainer } from './ItemListContainer';



function App() {

  return (
  <CartProvider>
    <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route exact path={`/`}>
                <ItemListContainer/>
            </Route>
            <Route exact path={`/category/:id`}>
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


{/* <Route exact path={`/detalle/:id`}>
<ItemDetailContainer />
</Route> */}