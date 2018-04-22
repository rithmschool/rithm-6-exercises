import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import VendingMachine from "./Components/VendingMachine";
import Chip from "./Components/Chip";
import Mango from "./Components/Mango";
import Soda from "./Components/Soda";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { chipsVisits: 0, mangoesVisits: 0, sodasVisits: 0 };
  }

  handleClick(keyVists) {
    this.setState(prevState => {
      let newState = { ...prevState };
      newState[keyVists] = prevState[keyVists] + 1;
      return newState;
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Vending Machine</h1>
          | <Link to="/">Home</Link> |{" "}
          <Link
            to="/chips"
            onClick={this.handleClick.bind(this, "chipsVisits")}
          >
            Chips
          </Link>{" "}
          |{" "}
          <Link
            to="/mangoes"
            onClick={this.handleClick.bind(this, "mangoesVisits")}
          >
            Mangoes
          </Link>{" "}
          |{" "}
          <Link
            to="/sodas"
            onClick={this.handleClick.bind(this, "sodasVisits")}
          >
            Sodas
          </Link>{" "}
          |
        </header>
        <div className="App-intro">
          <Route path="/" exact component={VendingMachine} />
          <Route
            path="/chips"
            exact
            component={props => <Chip visits={this.state.chipsVisits} />}
          />
          <Route
            path="/mangoes"
            exact
            component={props => <Mango visits={this.state.mangoesVisits} />}
          />
          <Route
            path="/sodas"
            exact
            component={props => <Soda visits={this.state.sodasVisits} />}
          />
        </div>
      </div>
    );
  }
}

export default App;
