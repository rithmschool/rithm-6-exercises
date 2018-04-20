import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import NewColorForm from "./NewColorForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        { color: "red", code: "#F20303" },
        { color: "blue", code: "#0336F2" },
        { color: "orange", code: "#F27303" }
      ]
    };
  }

  handleAddColor(newColor) {
    this.setState(prevState => ({
      colors: [newColor, ...prevState.colors]
    }));
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/colors/new"
            render={props => (
              <NewColorForm handleAddColor={this.handleAddColor} {...props} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
