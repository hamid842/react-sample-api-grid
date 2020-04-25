import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Products from "./components/Products";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/Products" component={Products} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
