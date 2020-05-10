import React from "react";
import AllBeers from "./components/AllBeers";
import Beer from "./components/Beer";
import Home from "./components/Home";
import Brewery from "./components/Brewery";
import SearchByCountry from "./components/SearchByCountry";
// import SearchByType from "./components/SearchByType";
import BreweryDetails from "./components/BreweryDetails";
import "./App.scss";
import NavBar from "./components/Nav";
import { Switch, Route } from "react-router-dom";
import BeerCountry from "./components/BeerCountry";

function App() {
  return ( 
    <div className="App">
        <NavBar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beer-details/:id" component={Beer} />
        <Route exact path="/brewery-details/:id" component={BreweryDetails} />
        <Route exact path="/allBeers" component={AllBeers} />
        <Route exact path="/allBreweries" component={Brewery} />
        <Route exact path="/searchByCountry" component={SearchByCountry} />
        {/* <Route exact path="/searchByType" component={SearchByType} /> */}
        <Route exact path="/beer-search/:id" component={BeerCountry} />
      </Switch>
    </div>
  );
}

export default App;
