import React from "react";
import { Route } from "react-router-dom";
import VendingMachine from "./VendingMachine.js";
import Beverages from "./Beverages.js";
import Candy from "./Candy.js";
import Protein from "./Protein.js";

const App = props => (
  <div className="App">
    <Route path="/" exact component={VendingMachine} />
    <Route path="/beverages" component={Beverages} />
    <Route path="/candy" component={Candy} />
    <Route path="/protein" component={Protein} />
  </div>
);

export default App;
