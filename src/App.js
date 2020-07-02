import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./pages/header/header.component";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}
//Switchで最初に該当したURLがレンダーされたら後からのコードは読まれない

export default App;
