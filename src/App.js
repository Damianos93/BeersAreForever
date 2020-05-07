import React from "react";
import AllBeers from "./components/AllBeers";
import Beer from "./components/Beer";
import Home from "./components/Home";
import "./App.scss";
import NavBar from "./components/Nav";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <NavBar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beer-details/:id" component={Beer} />
        <Route exact path="/allBeers" component={AllBeers} />
      </Switch>
    </div>
  );
}

export default App;
