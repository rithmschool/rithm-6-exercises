import React, { Component } from "react";
import { Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import AvocadoToast from "./AvocadoToast";
import LaCroix from "./LaCroix";
import PixieSticks from "./PixieSticks";
import "./App.css";

class App extends Component {
  render() {
    return (
      <section className="App">
        <Route path="/" exact component={VendingMachine} />
        <Route path="/avocadotoast" component={AvocadoToast} />
        <Route path="/lacroix" component={LaCroix} />
        <Route path="/pixiesticks" component={PixieSticks} />
      </section>
    );
  }
}

export default App;
