import React, { Component } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import NewColorForm from "./NewColorForm";
import ListAllColors from "./ListAllColors";
import ColorPage from "./ColorPage";

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
    this.handleAddColor = this.handleAddColor.bind(this);
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
            exact
            render={props => (
              <NewColorForm handleAddColor={this.handleAddColor} {...props} />
            )}
          />
          <Route
            path="/colors"
            exact
            render={props => (
              <ListAllColors allColors={this.state.colors} {...props} />
            )}
          />
          <Route
            path="/colors/:color"
            render={props => {
              console.log(props.match.params.color);
              if (
                this.state.colors.filter(
                  color => props.match.params.color === color.name
                )
              ) {
                return (
                  <ColorPage color={props.match.params.color} {...props} />
                );
              } else {
                console.log("WTF");
                return <Redirect to="/colors" />;
              }
            }}
          />
          <Redirect to="/colors" />
        </Switch>
      </div>
    );
  }
}

export default App;
